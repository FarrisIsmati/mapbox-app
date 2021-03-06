import socketIOClient                 from "socket.io-client"
import axios                          from 'axios'

const socket = socketIOClient("https://mapboxwhereisit.herokuapp.com")

export default {
  emitClientData: function(data){
    socket.emit('recieve client', data)
  },
  onSendChat: function(props, checkParity){
    socket.on('send chat', data => {
      console.log('CONNECTED')
      //Dispatch chat data to redux
      props.submitToChatlog({playerName: data.playerName, content: data.content})
      //Change guesses left
      if (checkParity() && data.content.toLowerCase() !== "idk" && data.guesses > 0 ){
        props.changeGuess(-1, props.player.host, props.game.id).then(()=>{
          //Handle a loss (Out of guesses)
          if (data.guesses - 1 == 0){
            props.changeCompleteGame(true, props.game.id)
            setTimeout(function(){
              props.submitToChatlog({content: "No more guesses left!"})
              props.submitToChatlog({content: "The game is over :("})
            }, 1000);
          }
        })
      }
    })
  },
  emitSendChat: function(props, data){
    socket.emit('send chat', {playerName: props.state.player.name, content: data, gameId: props.state.game.id, guesses: props.state.game.guesses})
  },
  //Sends a message without reducing guesses or sending a player name
  onSendMessage: function(props){
    socket.on('send message', data => {
      props.submitToChatlog({content: data.content})
    })
  },
  emitSendMessage: function(props, data){
    socket.emit('send message', {content: data, gameId: props.game.id})
  },
  //Reduces guesses without sending a chat
  onReduceGuess: function(props){
    socket.on('reduce guess', data => {
      props.changeGuess(-1, true, props.game.id)
    })
  },
  emitReduceGuess: function(props){
    socket.emit('reduce guess', {gameId: props.game.id})
  },
  onPlayerConnect: function(props, message){
    socket.on('player connect', playerName => {
      props.submitToChatlog({playerName: playerName, content: message})
    })
  },
  emitPlayerConnect: function(props){
    socket.emit('player connect', props.player.name)
  },
  onPlayerDisconnect: function(props, message){
    socket.on('player disconnect', playerName => {
        props.submitToChatlog({playerName: playerName, content: message})
    })
  },
  onUpdateMarkerCoordinates: function(props){
    socket.on('update marker coordinates', coordinates => {
      console.log(coordinates)
      props.changeMarkerCoords(coordinates)
    })
  },
  emitUpdateMarkerCoordinates: function(coordinates){
    socket.emit('update marker coordinates', coordinates)
  }
}
