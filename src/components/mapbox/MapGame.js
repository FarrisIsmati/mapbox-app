//DEPENDENCIES
import React, { Component }       from 'react'
import mapboxgl                   from 'mapbox-gl'
import secrets                    from '../../secrets'

//STYLES
import                                 'mapbox-gl/dist/mapbox-gl.css'

class MapGame extends Component {
  constructor(props) {
    super(props)

    this.draggableMarker = this.draggableMarker.bind(this)
  }

  draggableMarker(state) {
    let isDragging, isCursorOverPoint
    let canvas = state.map.getCanvasContainer()

    let geojson = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": this.props.game.mapMarkerCoords
            }
        }]
    }

    state.map.addSource('point', {
        "type": "geojson",
        "data": geojson
    })

    state.map.addLayer({
        "id": "point",
        "type": "circle",
        "source": "point",
        "paint": {
            "circle-radius": 20,
            "circle-color": "#3887be"
        }
    })

    // When the cursor enters a feature in the point layer, prepare for dragging.
    state.map.on('mouseenter', 'point', function() {
      canvas.style.cursor = 'move';
      isCursorOverPoint = true;
      state.map.dragPan.disable();
    });

    state.map.on('mouseleave', 'point', function() {
        canvas.style.cursor = '';
        isCursorOverPoint = false;
        state.map.dragPan.enable();
    });

    state.map.on('mousedown', mouseDown.bind(this));

    function mouseDown() {
        if (!isCursorOverPoint) return;

        isDragging = true;

        // Set a cursor indicator
        canvas.style.cursor = 'grab';
        // Mouse events
        state.map.on('mousemove', onMove.bind(this));
        state.map.once('mouseup', onUp);
    }

    function onMove(e) {
        if (!isDragging) return;
        let coords = e.lngLat;

        // Set a UI indicator for dragging.
        canvas.style.cursor = 'grabbing';

        // Update the Point feature in `geojson` coordinates
        // and call setData to the source layer `point` on it.
        this.props.changeMarkerCoords([coords.lng, coords.lat])
        geojson.features[0].geometry.coordinates = this.props.game.mapMarkerCoords;
        state.map.getSource('point').setData(geojson);
    }

    function onUp(e) {
        if (!isDragging) return;
        let coords = e.lngLat;

        canvas.style.cursor = '';
        isDragging = false;

        // Unbind mouse events
        state.map.off('mousemove', onMove);
    }
  }

  componentDidMount() {
    mapboxgl.accessToken = secrets.mapboxPK
    let map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/farrisismati/cjcz1pjhb078c2trlvec190bk',
        center: [0,0],
        zoom: 2,
        interactive: true
    })

    map.on('load', ()=>{
      this.setState({map: map},()=>{
        this.draggableMarker(this.state)
      })
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render(){
    return(
      <div className="map" ref={el => this.mapContainer = el} />
    )
  }
}

export default MapGame
