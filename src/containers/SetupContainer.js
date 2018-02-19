//DEPENDENCIES
import React, { Component }           from 'react'
import { connect }                    from 'react-redux'

//COMPONENTS
import name                           from '../components/setup/Name'

//REDUX
import {
          changePlayerName
        }                             from '../redux/actions/playerActions'
import {
          changeRequestHostName
        }                             from '../redux/actions/uiActions'


class SetupContainer extends Component {
  constructor(){
    super()

    this.state = {
      nameHolderClass: 'name__holder name__holder__active'
    }

    this.onSubmitName = this.onSubmitName.bind(this)
  }

  //Upon submitting name animate fade away and disable text area
  //requestHostName set to false in state
  onSubmitName(e, input) {
    e.preventDefault()
    let self = this
    input.disabled = true
    this.setState({nameHolderClass: 'name__holder name__holder__deactive'},()=>{
      setTimeout(()=>{
        self.props.changeRequestHostName()
      }, 1600)
    })
  }

  render(){
    return(
      <div className="setupcontainer__holder">
        { this.props.ui.requestHostName ?
          <div className={this.state.nameHolderClass}>
            <Name onSubmit={this.onSubmitName} />
          </div> :
          null
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changePlayerName: (playerName) => {
      dispatch(changePlayerName(playerName))
    },
    changeRequestHostName: () => {
      dispatch(changeRequestHostName())
    }
  }
}

const Name = connect(mapStateToProps, mapDispatchToProps)(name)

export default connect(mapStateToProps, mapDispatchToProps)(SetupContainer)
