//DEPENDENCIES
import MapboxGeocoder                 from 'mapbox-gl-geocoder'
import { store }                      from "../index"

//REDUX
import {
          changeMarkerCoords
        }                             from '../redux/actions/gameActions'

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

    // Update the Point feature in `geojson` coordinates
    // and call setData to the source layer `point` on it.
    store.dispatch(changeMarkerCoords([coords.lng, coords.lat]))
    geojson.features[0].geometry.coordinates = store.getState().game.mapMarkerCoords
    map.getSource('point').setData(geojson)
  }

  function onUp(e) {
    if (!isDragging) return
    let coords = e.lngLat
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

export function geocoder(map, token) {
  const geocode = new MapboxGeocoder({
      accessToken: token
  })
  map.addControl(geocode)

  //If you are not active handler you cannot change the value of the point via geocoder
  geocode.on('result', (ev) => {
    if (store.getState().player.activeHandler) {
      store.dispatch(changeMarkerCoords(ev.result.geometry.coordinates))
      map.getSource('point').setData(ev.result.geometry)
    }
  })
}
