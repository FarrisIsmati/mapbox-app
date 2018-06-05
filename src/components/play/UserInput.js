//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'
import Input1                         from '../common/inputs/Input1'

//Input only on even number of inputs
const UserInput = (props) => (
  <div className="userinput__holder">
    {props.parity() && !props.state.game.completed ?
      <div className="flex">
        <Input1
        onSubmit={e=>{props.submitChat(e, e.target[0].value, props); e.target[0].value = ""}}
        classNameForm="margin__right__15"
        className="input input__visible input__medium margin__right__15"/>
        <Button1 click={e=>props.submitGuess()} fontSize="2em" name="Guess" />
      </div>:
      <div className="flex">
        <Input1
        onSubmit={e=>e.preventDefault()}
        classNameForm="margin__right__15"
        className="input input__deactive input__medium"/>
        <Button1 className="button__one__deactive" click={e=>e.preventDefault()} fontSize="2em" name="Guess" />
      </div>
    }
  </div>
)

UserInput.propTypes = {
  props: PropTypes.object,
}

export default UserInput
