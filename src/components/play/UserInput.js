//DEPENDENCIES
import React                          from 'react'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'
import Input1                         from '../common/inputs/Input1'

//Input only on even number of inputs
const UserInput = (props) => (
  <div className="userinput__holder">
    {props.parity() ?
      <Input1
      onSubmit={e=>{props.submitChat(e, e.target[0].value, props.state); e.target[0].value = ""}}
      className="input input__visible input__medium"/>:
      <Input1
        onSubmit={e=>e.preventDefault()}
        className="input input__deactive input__medium"/>
    }
    <Button1 fontSize="2em" name="Guess" />
    </div>
)

export default UserInput
