//DEPENDENCIES
import React                          from 'react'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'


const HostInput = (props) => (
  <div className="hostinput__holder">
    {!props.parity() ?
      <div className="hostinput__buttons">
        <Button1 click={e=>props.submitChat(e, "Yes", props.state)} fontSize="2em" name="Yes" />
        <Button1 click={e=>props.submitChat(e, "No", props.state)} fontSize="2em" name="No" />
        <Button1 click={e=>props.submitChat(e, "Idk", props.state)} fontSize="2em" name="Idk" />
        <Button1 fontSize="2em" name="Link" />
      </div>:
      <div className="hostinput__buttons">
        <Button1 className="button__one button__one__deactive" fontSize="2em" name="Yes" />
        <Button1 className="button__one button__one__deactive" fontSize="2em" name="No" />
        <Button1 className="button__one button__one__deactive" fontSize="2em" name="Idk" />
        <Button1 className="button__one button__one__deactive" fontSize="2em" name="Link" />
      </div>
    }
  </div>
)

export default HostInput
