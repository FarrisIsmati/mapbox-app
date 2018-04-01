import socketIOClient from "socket.io-client"

const socket = socketIOClient("localhost:3001")

export default {
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
    socket.emit('send chat', {playerName: props.player.name, content: data, gameId: props.game.id})
  },
  onPlayerConnect: function(props, message){
    socket.on('player connect', playerName => {
      props.submitToChatlog({playerName: playerName, content: message})
    })
  },
  emitPlayerConnect: function(props){
    socket.emit('player connect', props.player.name)
  }
}
