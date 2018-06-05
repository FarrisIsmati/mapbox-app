//DEPENDENCIES
import React, { Component }           from 'react'
import socketUtils                    from '../../utils/socketHelpers.js'
import axios                          from 'axios'

//COMPONENTS
import ChatLog                        from './ChatLog'
import HostInput                      from './HostInput'
import UserInput                      from './UserInput'

class Play extends Component {
  constructor(){
    super()

    this.submitGuess = this.submitGuess.bind(this)
    this.checkParity = this.checkParity.bind(this)
    this.submitChat = this.submitChat.bind(this)
  }

  //Checks parity of chat log to determine whether or not you can send a chat log
  checkParity() {
    let length = this.props.game.chatLog.length - 1
    return length <= 0 || length % 2 === 0 ? true : false
  }

  submitGuess() {
    if (this.props.game.guesses > 0 && !this.props.game.completed){
      //Store the meta data of the radius in the backend
        axios.get('https://mapboxwhereisit.herokuapp.com/game/checkRadiusMetaData/' + this.props.game.id + '/' + this.props.game.mapMarkerCoords[0] + '/' + this.props.game.mapMarkerCoords[1])
        .then((result)=>{
          //If you guessed correctly (result.data)
          if (result.data && !this.props.game.completed){
              this.props.changeCompleteGame(true, this.props.game.id)
              socketUtils.emitSendMessage(this.props, `${this.props.player.name} guessed correctly, congrats!`)
              socketUtils.emitSendMessage(this.props, 'The game is over')
            } else {
              socketUtils.emitReduceGuess(this.props)
              if (this.props.game.guesses - 1 < 1){
                this.props.changeCompleteGame(true, this.props.game.id)
                socketUtils.emitSendMessage(this.props, `${this.props.player.name}, you lost :(`)
                socketUtils.emitSendMessage(this.props, 'The game is over')
              }
            }
        })
        .catch(err=>console.log(err))
    }

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
    socketUtils.emitClientData(this.props)
    socketUtils.onSendChat(this.props, this.checkParity)
    socketUtils.onSendMessage(this.props)
    socketUtils.onPlayerConnect(this.props, "Has connected!")
    socketUtils.onUpdateMarkerCoordinates(this.props)
    socketUtils.onPlayerDisconnect(this.props, "Has Disconnected!")
    socketUtils.onReduceGuess(this.props)
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
              submitGuess={this.submitGuess}
              submitChat={this.submitChat}
            />
          }
        </div>
      </div>
    )
  }
}

export default Play
