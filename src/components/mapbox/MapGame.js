//DEPENDENCIES
import React, { Component }       from 'react'
import mapboxgl                   from 'mapbox-gl'
import secrets                    from '../../secrets'
import {
          draggableMarker,
          geocoder,
          circleRadius,
          setRadiusOnUpdate,
          setMarkerOnUpdate
        }                         from '../../utils/mapHelpers.js'

//STYLES
import                                 'mapbox-gl/dist/mapbox-gl.css'

class MapGame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mapLoaded: false
    }
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
      this.setState({map: map, mapLoaded: true},()=>{
        draggableMarker(this.state.map)
        geocoder(this.state.map, mapboxgl.accessToken)
        //Set so circle radius only shows up if your the host
        this.props.player.host ? circleRadius(this.state.map) : null
      })
    })
  }

  //Set it so Radius only shows up if you're the host
  componentDidUpdate() {
    if (this.state.mapLoaded) {
      setRadiusOnUpdate(this.state.map, this.props.game)
    }

    //If you turn on reset game coords then you can set the coords to what ever you dispatch to changeMapMarker
    if (this.props.game.resetCoords) {
      setMarkerOnUpdate(this.state.map, this.props.game)
    }

    //Update the map for the host if the connected player moves the map
    if (this.props.player.host && this.props.game.active) {
      setMarkerOnUpdate(this.state.map, this.props.game)
    }
  }

  componentWillUnmount() {
    //Necessary for redirects because map wont load before a redirect happens
    if (this.state.map){
      this.state.map.remove()
    }
  }

  render(){
    return(
      <div className="map" ref={el => this.mapContainer = el} />
    )
  }
}

export default MapGame
