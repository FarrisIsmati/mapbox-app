//DEPENDENCIES
import React, { Component }           from 'react'

//COMPONENTS
import ChatLog                        from './ChatLog'
import HostInput                      from './HostInput'
import UserInput                      from './UserInput'

class Play extends Component {
  constructor(){
    super()

    this.checkParity = this.checkParity.bind(this)
    this.submitChat = this.submitChat.bind(this)
  }

  checkParity() {
    const length = this.props.game.chatLog.length
    return length === 0 || length % 2 === 0 ? true : false
  }

  submitChat (e, data, state) {
    e.preventDefault()
    state.submitToChatlog({playerName: state.player.name, content: data})
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
          <ChatLog state={this.props}/>
          <div className="guesscounter__holder">
            <p>Questions left: <span>9</span></p>
          </div>
          <UserInput
            state={this.props}
            parity={this.checkParity}
            submitChat={this.submitChat}
          />
        </div>
      </div>
    )
  }
}

export default Play

// <HostInput
//   state={this.props}
//   parity={this.checkParity}
//   submitChat={this.submitChat}
// />
