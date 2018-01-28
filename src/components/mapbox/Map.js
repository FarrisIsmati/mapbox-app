//DEPENDENCIES
import React, { Component }       from 'react'
import secrets                    from '../../secrets'
import mapboxgl                   from 'mapbox-gl'

//STYLES
import                                 'mapbox-gl/dist/mapbox-gl.css'
import                                 './map.css'

class Map extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    mapboxgl.accessToken = secrets.mapboxPK
    let map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9'
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

export default Map
