//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'

//COMPONENTS
import name                           from '../components/setup/Name'

//REDUX
import {
          changePlayerName
        }                             from '../redux/actions/playerActions'
import {
          changeRequestHostName,
          changeNameHolderClass
        }                             from '../redux/actions/uiActions'

//Upon submitting name animate fade away and disable text area
//requestHostName set to false in store
const onSubmitName = (e, input, changeNameHolderClass, changeRequestHostName) => {
  e.preventDefault()
  input.disabled = true
  changeNameHolderClass('name__holder name__holder__deactive')
  setTimeout(()=>{
    changeRequestHostName(false)
  }, 1600)
}

const SetupContainer = ({ui, changeNameHolderClass, changeRequestHostName}) => {
  return (
    <div className="setupcontainer__holder">
      {console.log(ui)}
      { ui.requestHostName ?
        <div className={ui.nameHolderClass}>
          <Name onSubmit={(e, input)=>onSubmitName(e, input, changeNameHolderClass, changeRequestHostName)} />
        </div> :
        null
      }
    </div>
  )
}

const mapStateToProps = (state) => ({...state})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changePlayerName: (playerName) => {
      dispatch(changePlayerName(playerName))
    },
    changeRequestHostName: (request) => {
      dispatch(changeRequestHostName(request))
    },
    changeNameHolderClass: (className) => {
      dispatch(changeNameHolderClass(className))
    }
  }
}

const Name = connect(mapStateToProps, mapDispatchToProps)(name)

export default connect(mapStateToProps, mapDispatchToProps)(SetupContainer)
