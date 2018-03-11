//DEPENDENCIES
import React                          from 'react'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'
import Input1                         from '../common/inputs/Input1'

const submitChat = (e, data, state) => {
  e.preventDefault()
  state.state.submitToChatlog({playerName: state.state.player.name, content: data})
}

const UserInput = (state) => (
  <div className="userinput__holder">
    <Input1
      onSubmit={(e)=>{submitChat(e, e.target[0].value, state); e.target[0].value = ""}}
      className="input input__visible input__medium"/>
    <Button1 fontSize="2em" name="Guess" />
  </div>
)

export default UserInput
