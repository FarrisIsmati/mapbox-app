//DEPENDENCIES
import React , { Component }          from 'react'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'
import Input1                         from '../common/inputs/Input1'

//Input only on even number of inputs
class UserInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputText: "",
      inputTarget: null
    }
  }

  render(){
    return(
      <div className="userinput__holder">
        {this.props.parity() && !this.props.state.game.completed && this.props.state.game.guesses > 1  ?
          <div className="flex flex__vertcenter">
            <Input1
            onSubmit={e=>{this.props.submitChat(e, e.target[0].value, this.props); e.target[0].value = ""}}
            classNameForm="margin__right__10"
            className="input input__visible input__medium margin__right__15"
            setTarget={(input)=>this.setState({...this.state, inputTarget: input})}
            onChange={e=>{this.setState({inputText: e.target.value})}}/>
            <Button1 click={e=>{this.props.submitChat(e, this.state.inputText, this.props);this.state.inputTarget.value = ""}} fontSize="2em" name="Send" />
            <Button1 click={e=>this.props.submitGuess()} fontSize="2em" name="Guess" />
          </div>:
          <div className="flex flex__vertcenter">
            <Input1
            onSubmit={e=>e.preventDefault()}
            classNameForm="margin__right__10"
            className="input input__deactive input__medium"/>
            <Button1 className="button__one button__one__deactive"  fontSize="2em" name="Send" />
            <Button1 click={e=>this.props.submitGuess()} fontSize="2em" name="Guess" />
          </div>
        }
      </div>
    )
  }
}

export default UserInput
