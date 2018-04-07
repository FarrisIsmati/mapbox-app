//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

const Response = (data) => data.map((res, i) => (
  <div key={i}>
    <p className="chatlog__playername">{res.playerName}:</p>
    <p className="chatlog__playercontent">{res.content}</p>
  </div>
))

const ChatLog = (state) => (
  <div className="chatlog__holder">
    <div>
      {Response(state.state.game.chatLog)}
    </div>
  </div>
)

ChatLog.propTypes = {
  state: PropTypes.object,
}

export default ChatLog
