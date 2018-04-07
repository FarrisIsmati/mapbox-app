//DEPENDENCIES
import MapboxGeocoder                 from 'mapbox-gl-geocoder'
import { store }                      from '../index'
import socketUtils                    from './socketHelpers'

//REDUX
import {
          changeMarkerCoords
        }                             from '../redux/actions/gameActions'

//Sets Circle Radius to units of Kilometers
export function createGeoJSONCircle(center, radiusInKm, points){
    if(!points) points = 64;

    let coords = {
        latitude: center[1],
        longitude: center[0]
    };

    let km = radiusInKm

    let ret = []
    let distanceX = km/(111.320*Math.cos(coords.latitude*Math.PI/180))
    let distanceY = km/110.574

    let theta, x, y
    for(var i=0; i<points; i++) {
        theta = (i/points)*(2*Math.PI)
        x = distanceX*Math.cos(theta)
        y = distanceY*Math.sin(theta)

        ret.push([coords.longitude+x, coords.latitude+y])
    }
    ret.push(ret[0])

    return {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "radius" : radiusInKm,
                    "originalCoords" : [center[0], center[1]],
                    "coordinates": [ret]
                }
            }]
        }
    }
}

//Creates the initial circle radius on the map
export function circleRadius(map) {
  //Radius Circle
  map.addSource("markedRadius", createGeoJSONCircle(store.getState().game.setMarkerCoords, 0))

  map.addLayer({
      "id": "markedRadius",
      "type": "fill",
      "source": "markedRadius",
      "layout": {},
      "paint": {
          "fill-color": "#FFA856",
          "fill-opacity": 0.4
      }
  })
}

//Sets up a draggable marker for the map
export function draggableMarker(map) {
  let isDragging, isCursorOverPoint
  let canvas = map.getCanvasContainer()
  let geojson = {
      "type": "FeatureCollection",
      "features": [{
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": store.getState().game.mapMarkerCoords
          }
      }]
  }

  map.addSource('point', {
      "type": "geojson",
      "data": geojson
  })

  map.addLayer({
      "id": "point",
      "type": "circle",
      "source": "point",
      "paint": {
        "circle-radius": 12,
        "circle-stroke-width": 0,
        "circle-stroke-color": "rgba(0,0,0,0)",
        "circle-color": "#FFF"
      }
  })

  // When the cursor enters a feature in the point layer, prepare for dragging.
  //If you are not active handler you cannot move the point
  map.on('mouseenter', 'point', function() {
    if (store.getState().player.activeHandler) {
      setStyle(3,'rgba(220,220,220,1)')
      isCursorOverPoint = true;
      map.dragPan.disable();
    }
  })

  map.on('mouseleave', 'point', function() {
      setStyle(0,'rgba(0,0,0,0)')
      isCursorOverPoint = false
      map.dragPan.enable()
  })

  map.on('mousedown', mouseDown.bind(this));

  //If you are not active handler you cannot move the point
  function mouseDown() {
    if (store.getState().player.activeHandler) {
      if (!isCursorOverPoint) return
      isDragging = true

      // Set a cursor indicator
      canvas.style.cursor = 'grab'
      setStyle(3,'rgba(220,220,220,1)')

      // Mouse events
      map.on('mousemove', onMove.bind(this))
      map.once('mouseup', onUp)
    }
  }

  function onMove(e) {
    if (!isDragging) return
    let coords = e.lngLat
    // Set a UI indicator for dragging.
    canvas.style.cursor = 'grabbing'
    setStyle(3,'rgba(220,220,220,1)')

    //Update local & connected client coordinates
    store.dispatch(changeMarkerCoords([coords.lng, coords.lat]))
    socketUtils.emitUpdateMarkerCoordinates([coords.lng, coords.lat])

    // Update the Point feature in `geojson` coordinates
    // and call setData to the source layer `point` on it.
    geojson.features[0].geometry.coordinates = store.getState().game.mapMarkerCoords
    map.getSource('point').setData(geojson)
  }

  function onUp(e) {
    if (!isDragging) return
    canvas.style.cursor = ''
    isDragging = false
    setStyle(0,'rgba(0,0,0,0)')

    // Unbind mouse events
    map.off('mousemove', onMove)
  }

  function setStyle(width, color) {
    map.setPaintProperty('point', 'circle-stroke-width', width)
    map.setPaintProperty('point', 'circle-stroke-color', color)
  }
}

//Loads the geocoder on the map
export function geocoder(map, token) {
  const geocode = new MapboxGeocoder({
      accessToken: token
  })
  map.addControl(geocode)

  //If you are not active handler you cannot change the value of the point via geocoder
  geocode.on('result', (ev) => {
    if (store.getState().player.activeHandler) {
      //Update local & connected client coordinates
      store.dispatch(changeMarkerCoords(ev.result.geometry.coordinates))
      socketUtils.emitUpdateMarkerCoordinates(ev.result.geometry.coordinates)
      //Change geojson coordinates on map
      map.getSource('point').setData(ev.result.geometry)
    }
  })
}

//Checks if every element in an array matches
const coordsEqual = (coord1, coord2) => {
    if(coord1.length !== coord2.length)
        return false
    for (let i = coord1.length; i--;) {
        if(coord1[i] !== coord2[i]){
          return false
        }
    }
    return true
}

//Update the set map marker geojson by comparing the current geojson location & radius to the redux store location and radius
//Unsure if I'm mutating the map, dont know any other way
export function setRadiusOnUpdate(map, game) {
  if (map.getSource('markedRadius')){
    let newCoords = game.setMarkerCoords
    let setCoords = map.getSource('markedRadius')._data.features[0].geometry.originalCoords
    let setRadius = map.getSource('markedRadius')._data.features[0].geometry.radius
    if (!coordsEqual(newCoords,setCoords) || game.setMarkerRadius !== setRadius){
      let geojson = createGeoJSONCircle(game.setMarkerCoords, game.setMarkerRadius).data
      map.getSource('markedRadius').setData(geojson)
    }
  }
}

//Update the set map marker geojson by comparing the current geojson location to the redux store location
//Unsure if I'm mutating the map, dont know any other way
export function setMarkerOnUpdate(map, game) {
  let geojson = {
      "type": "FeatureCollection",
      "features": [{
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": store.getState().game.mapMarkerCoords
          }
      }]
  }
  map.getSource('point').setData(geojson)
  map.flyTo({
    center: game.mapMarkerCoords,
    zoom: 3
  })
}
