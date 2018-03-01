//DEPENDENCIES
import React, { Component }           from 'react'
import { connect }                    from 'react-redux'
import axios                          from 'axios'

//COMPONENTS
import Play                           from '../components/play/Play'

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
        <Play />
      </div>
    )
  }
}

export default PlayContainer
