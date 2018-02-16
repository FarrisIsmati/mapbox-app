//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

const Name = ({player, changePlayerName}) => (
  <div className="name__holder">
    <input
      type="text"
      className="input__large"
      maxLength="14"
      placeholder="YOUR NAME"
      onChange={e => changePlayerName(e.target.value.toUpperCase())}
      value={player.name}
    ></input>
  </div>
)

export default Name
