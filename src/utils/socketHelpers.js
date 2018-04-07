import socketIOClient from "socket.io-client"

const socket = socketIOClient("localhost:3001")

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
      if (checkParity() && data.content.toLowerCase() !== "idk" && props.game.guesses > 0){
        props.changeGuess(-1, props.player.host, props.game.id)
      }
    })
  },
  emitSendChat: function(props, data){
    socket.emit('send chat', {playerName: props.state.player.name, content: data, gameId: props.state.game.id})
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
