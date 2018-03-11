//DEPENDENCIES
import React                          from 'react'

const Response = (data) => data.map((res, i) => (
  <div key={i}>
    <p>{res.playerName}:</p>
    <p>{res.content}</p>
  </div>
))


const ChatLog = (state) => (
  <div className="chatlog__holder">
    {Response(state.state.game.chatLog)}
  </div>
)

export default ChatLog
