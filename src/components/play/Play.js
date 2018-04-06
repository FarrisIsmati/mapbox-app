//DEPENDENCIES
import React, { Component }           from 'react'
import socketIOClient                 from "socket.io-client"
import socketUtils                    from '../../utils/socketHelpers.js'

//COMPONENTS
import ChatLog                        from './ChatLog'
import HostInput                      from './HostInput'
import UserInput                      from './UserInput'

class Play extends Component {
  constructor(){
    super()
    this.state = {
      socket: socketIOClient("localhost:3001")
    }
    this.checkParity = this.checkParity.bind(this)
    this.submitChat = this.submitChat.bind(this)
  }

  //Checks parity of chat log to determine whether or not you can send a chat log
  checkParity() {
    let length = this.props.game.chatLog.length - 1
    return length <= 0 || length % 2 === 0 ? true : false
  }

  //Send Chat to Websockets
  submitChat (e, data, state) {
    e.preventDefault()
    socketUtils.emitSendChat(state, data)
  }

  componentDidMount() {
    //Component needs to mount before triggering animation otherwise animation wont run
    let self = this
    setTimeout(()=>{
      self.props.changeSetupPlayClass("play__holder ui__holder__active")
    }, 100)
    //Send connected message
    if (!this.props.player.host && this.props.player.name && this.props.game.active) {
      socketUtils.emitPlayerConnect(this.props)
    }
    //Websocket listeners
    socketUtils.onSendChat(this.props, this.checkParity)
    socketUtils.onPlayerConnect(this.props, "Has connected!")
    socketUtils.onUpdateMarkerCoordinates(this.props)
  }

  render(){
    return(
      <div className={this.props.ui.setupPlayClass}>
        <div className="chatbox__holder">
          <ChatLog state={this.props}/>
          <div className="guesscounter__holder">
            <p>Questions left: <span>{this.props.game.guesses}</span></p>
          </div>
          { this.props.player.host ?
            <HostInput
              state={this.props}
              parity={this.checkParity}
              submitChat={this.submitChat}
            /> :
            <UserInput
              state={this.props}
              parity={this.checkParity}
              submitChat={this.submitChat}
            />
          }
        </div>
      </div>
    )
  }
}

export default Play
