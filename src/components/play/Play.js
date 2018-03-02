//DEPENDENCIES
import React, { Component }           from 'react'

//COMPONENTS
import HostInput                      from './HostInput'
import UserInput                      from './UserInput'

class Play extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className="playcontainer__holder">
        <div className="chatbox__holder">
          <div></div>
          <div></div>
          <div className="guesscounter__holder">
            <p>Questions left: <span>9</span></p>
          </div>
          <UserInput />
        </div>
      </div>
    )
  }
}

export default Play
