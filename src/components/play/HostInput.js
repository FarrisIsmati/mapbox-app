//DEPENDENCIES
import React, { Component }           from 'react'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'

class HostInput extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className="hostinput__holder">
        <Button1 fontSize="2em" name="Yes" />
        <Button1 fontSize="2em" name="No" />
        <Button1 fontSize="2em" name="Idk" />
        <Button1 fontSize="2em" name="Link" />
      </div>
    )
  }
}

export default HostInput
