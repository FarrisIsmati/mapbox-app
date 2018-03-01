//DEPENDENCIES
import React, { Component }           from 'react'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'
import Input1                         from '../common/inputs/Input1'

class UserInput extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className="userinput__holder">
        <Input1 className="input input__visible input__medium"/>
        <Button1 fontSize="2em" name="Ask" />
        <Button1 fontSize="2em" name="Guess" />
      </div>
    )
  }
}

export default UserInput
