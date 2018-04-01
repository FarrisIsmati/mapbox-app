//DEPENDENCIES
import React, { Component }           from 'react'
import socketIOClient                 from "socket.io-client"

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
    this.state.socket.emit('send chat', {playerName: state.player.name, content: data, gameId: state.game.id})
  }

  componentDidMount() {
    //Component needs to mount before triggering animation otherwise animation wont run
    let self = this
    setTimeout(()=>{
      self.props.changeSetupPlayClass("play__holder ui__holder__active")
    }, 100)

    if (!this.props.player.host && this.props.player.name && this.props.game.active) {
      this.state.socket.emit('player connect', this.props.player.name)
    }

    //RECIEVE CHAT FOR WEBSOCKETS
    this.state.socket.on('send chat', (data) => {
      console.log('CONNECTED  ')
      //Dispatch chat data to redux
      this.props.submitToChatlog({playerName: data.playerName, content: data.content})
      //Change guesses left
      if (this.checkParity() && data.content.toLowerCase() !== "idk" && this.props.game.guesses > 0){
        this.props.changeGuess(-1, this.props.player.host, this.props.game.id)
      }
    })

    this.state.socket.on('player connect', playerName => {
      this.props.submitToChatlog({playerName: playerName, content: "Has connected!"})
    })
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
