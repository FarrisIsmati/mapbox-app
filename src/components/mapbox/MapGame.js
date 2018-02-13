//DEPENDENCIES
import React, { Component }       from 'react'
import mapboxgl                   from 'mapbox-gl'
import secrets                    from '../../secrets'
import { draggableMarker }        from '../../utils/mapHelpers.js'

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
        center: [0,0],
        zoom: 2,
        interactive: true
    })

    map.on('load', ()=>{
      this.setState({map: map},()=>{
        draggableMarker(this.state)
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
