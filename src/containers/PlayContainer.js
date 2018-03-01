//DEPENDENCIES
import React, { Component }           from 'react'
import { connect }                    from 'react-redux'
import axios                          from 'axios'

//COMPONENTS
import HostInput                      from '../components/play/HostInput'
import UserInput                      from '../components/play/UserInput'

class PlayContainer extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    console.log('Play container here in action')
  }

  render() {
    return (
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

export default PlayContainer
