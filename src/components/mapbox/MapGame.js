//DEPENDENCIES
import React, { Component }       from 'react'
import mapboxgl                   from 'mapbox-gl'
import secrets                    from '../../secrets'
import {
          draggableMarker,
          geocoder
        }                         from '../../utils/mapHelpers.js'

//STYLES
import                                 'mapbox-gl/dist/mapbox-gl.css'

class MapGame extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    mapboxgl.accessToken = secrets.mapboxPK

    let map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/farrisismati/cjdnh7yjh05hs2snz74ww9ubo',
        center: this.props.game.mapMarkerCoords,
        zoom: 3,
        interactive: true
    })

    map.on('load', ()=>{
      draggableMarker(map)
      geocoder(map, mapboxgl.accessToken)
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
