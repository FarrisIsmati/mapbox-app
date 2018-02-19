//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

const Name = ({player, changePlayerName, onSubmit}) => (
  <form onSubmit={ e => {onSubmit(e,this.input)} }>
    <input
      ref={el=> {this.input = el}}
      type="text"
      className="input__large"
      maxLength="14"
      placeholder="YOUR NAME"
      onChange={e => changePlayerName(e.target.value.toUpperCase())}
      value={player.name}
    ></input>
  </form>
)

export default Name
