//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'

//COMPONENTS
import MapGame                        from '../components/mapbox/MapGame'

const GameContainer = () => {
  return(
    <MapGame coords={[-73,38]}></MapGame>
  )
}

export default GameContainer
