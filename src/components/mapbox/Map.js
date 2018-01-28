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

    this.mapPan = this.mapPan.bind(this)
    this.randomCoordinate = this.randomCoordinate.bind(this)
    this.randomStartingCoordinates = this.randomStartingCoordinates.bind(this)
    this.randomSign = this.randomSign.bind(this)
  }

  randomStartingCoordinates() {
    const coordiantes = [
      {lat: 39, lng: -77},
      {lat: 12, lng: 45},
      {lat: 77, lng: 20},
      {lat: -4, lng: 21}
    ]

    return coordiantes[Math.floor(Math.random()*coordiantes.length)]
  }

  randomSign() {
    return Math.round(Math.random()) * 2 - 1
  }

  randomCoordinate() {
    return this.randomSign() * (Math.random() * (350 - 300) - 300)
  }

  mapPan(map, duration) {
    map.panBy(
      [this.randomCoordinate(), this.randomCoordinate()],
      { duration: duration, easing: (t) => t * .5 }
    )
    setTimeout(()=>{
      this.mapPan(map, duration)
    }, duration)
  }

  componentDidMount() {
    mapboxgl.accessToken = secrets.mapboxPK
    let map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/farrisismati/cjcz1pjhb078c2trlvec190bk',
        center: [this.randomStartingCoordinates().lng, this.randomStartingCoordinates().lat],
        zoom: this.props.zoom,
        interactive: this.props.interactive
    })

    this.mapPan(map, 30000)
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
  interactive: PropTypes.bool,
  zoom: PropTypes.number
}

Map.defaultProps = {
  interactive: false,
  zoom: 3
}

export default Map
