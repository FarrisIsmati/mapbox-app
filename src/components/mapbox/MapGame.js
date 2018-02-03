//DEPENDENCIES
import React, { Component }       from 'react'
import mapboxgl                   from 'mapbox-gl'
import secrets                    from '../../secrets'

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
        style: 'mapbox://styles/farrisismati/cjcz1pjhb078c2trlvec190bk',
        center: [this.props.long, this.props.lat],
        zoom: 5,
        interactive: false
    })
    this.setState({map: map})
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
