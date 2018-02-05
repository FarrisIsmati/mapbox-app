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

  draggableMarker() {
    let state = this.state
    let canvas = this.state.map.getCanvasContainer()
    let isDragging
    let isCursorOverPoint
    let geojson = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [0,0]
            }
        }]
    }

    this.state.map.addSource('point', {
        "type": "geojson",
        "data": geojson
    })

    this.state.map.addLayer({
        "id": "point",
        "type": "circle",
        "source": "point",
        "paint": {
            "circle-radius": 40,
            "circle-color": "#3887be"
        }
    })

    // When the cursor enters a feature in the point layer, prepare for dragging.
    this.state.map.on('mouseenter', 'point', function() {
      canvas.style.cursor = 'move';
      isCursorOverPoint = true;
      state.map.dragPan.disable();
    });

    this.state.map.on('mouseleave', 'point', function() {
        canvas.style.cursor = '';
        isCursorOverPoint = false;
        state.map.dragPan.enable();
    });

    this.state.map.on('mousedown', mouseDown);

    function mouseDown() {
        if (!isCursorOverPoint) return;

        isDragging = true;

        // Set a cursor indicator
        canvas.style.cursor = 'grab';

        // Mouse events
        state.map.on('mousemove', onMove);
        state.map.once('mouseup', onUp);
    }

    function onMove(e) {
        if (!isDragging) return;
        var coords = e.lngLat;

        // Set a UI indicator for dragging.
        canvas.style.cursor = 'grabbing';

        // Update the Point feature in `geojson` coordinates
        // and call setData to the source layer `point` on it.
        geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
        state.map.getSource('point').setData(geojson);
    }

    function onUp(e) {
        if (!isDragging) return;
        var coords = e.lngLat;

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
        center: [this.props.coords[0], this.props.coords[1]],
        zoom: 2,
        interactive: true
    })

    map.on('load', ()=>{
      this.setState({map: map},()=>{
        this.draggableMarker()
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
