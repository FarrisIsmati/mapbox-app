//DEPENDENCIES
import React, { Component }           from 'react'

//COMPONENTS
import HostInput                      from './HostInput'
import UserInput                      from './UserInput'

class Play extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    //Component needs to mount before triggering animation otherwise animation wont run
    let self = this
    setTimeout(()=>{
      self.props.changeSetupPlayClass("play__holder ui__holder__active")
    }, 100)
  }

  render(){
    return(
      <div className={this.props.ui.setupPlayClass}>
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
