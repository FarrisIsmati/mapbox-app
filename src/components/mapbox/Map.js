//DEPENDENCIES
import React, { Component }       from 'react'
import mapboxgl                   from 'mapbox-gl'
import PropTypes                  from 'prop-types'
import secrets                    from '../../secrets'

//STYLES
import                                 'mapbox-gl/dist/mapbox-gl.css'

class Map extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    mapboxgl.accessToken = secrets.mapboxPK
    let map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-70,10],
        zoom: 2
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

Map.propTypes = {
  interactive: PropTypes.bool
}

export default Map
