//DEPENDENCIES
import React, { Component }           from 'react'

//COMPONENTS
import Map                            from '../mapbox/Map'

class NewGame extends Component {
  render() {
    return (
      <div className="newgame__holder">
        <Map />
      </div>
    )
  }
}

export default NewGame
