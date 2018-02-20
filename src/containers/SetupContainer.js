//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'

//COMPONENTS
import name                           from '../components/setup/Name'

//REDUX
import {
          changePlayerName,
          setHostType
        }                             from '../redux/actions/playerActions'
import {
          changeRequestHostName,
          changeNameHolderClass
        }                             from '../redux/actions/uiActions'

//Upon submitting name animate fade away and disable text area
//requestHostName set to false in store
//Set player to host
const onSubmitName = (e, input, changeNameHolderClass, changeRequestHostName, setPlayerType) => {
  e.preventDefault()
  input.disabled = true
  setHostType(true)
  changeNameHolderClass('name__holder name__holder__deactive')
  setTimeout(()=>{
    changeRequestHostName(false)
    geocoder()
  }, 1600)
}

const geocoder = () => {

}

const SetupContainer = ({ui, changeNameHolderClass, changeRequestHostName, setPlayerType}) => {
  return (
    <div className="setupcontainer__holder">
      { ui.requestHostName ?
        <div className={ui.nameHolderClass}>
          <Name
            onSubmit={(e, input)=> onSubmitName(
              e,
              input,
              changeNameHolderClass,
              changeRequestHostName,
              setPlayerType
            )}
          />
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
    setHostType: (bool) => {
      dispatch(setHostType(bool))
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
