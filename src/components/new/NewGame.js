//DEPENDENCIES
import React, { Component }           from 'react'

//COMPONENTS
import Map                            from '../mapbox/Map'

//Landing page
class NewGame extends Component {
  render() {
    return (
      <div className="newgame__holder">
        <Map zoom={6}/>
      </div>
    )
  }
}

export default NewGame
