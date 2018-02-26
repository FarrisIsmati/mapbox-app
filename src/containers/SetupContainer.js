//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'

//COMPONENTS
import config                         from '../components/setup/Config'
import Input1                         from '../components/common/inputs/Input1'


//REDUX
import {
          changePlayerName,
          setHostType
        }                             from '../redux/actions/playerActions'
import {
          changeRequestHostName,
          changeNameHolderClass,
          changeSetupConfigClass
        }                             from '../redux/actions/uiActions'
import {
          changeSetMarkerRadius,
          changeSetMarkerCoords
        }                             from '../redux/actions/gameActions'

//Convert to Class on component Did Mount Upload Data From Backend

//Upon submitting name animate fade away and disable text area
//requestHostName set to false in store
//Set player to host
const onSubmitName = (e, input, changeNameHolderClass, changeRequestHostName, setHostType) => {
  e.preventDefault()
  input.disabled = true
  setHostType(true)
  changeNameHolderClass('name__holder name__holder__deactive')
  setTimeout(()=>{
    changeRequestHostName(false)
  }, 1600)
}

const SetupContainer = ({ui, player, changeNameHolderClass, changeRequestHostName, changePlayerName, setHostType}) => {
  return (
    <div className="setupcontainer__holder">
      { ui.requestHostName ?
        <div className={ui.nameHolderClass}>
          <Input1
            onSubmit={(e, input)=> onSubmitName(
              e,
              input,
              changeNameHolderClass,
              changeRequestHostName,
              setHostType,
              changeSetupConfigClass
            )}
            className={"input"}
            maxLength={"14"}
            placeholder={"YOUR NAME"}
            onChange={e => changePlayerName(e.target.value.toUpperCase())}
            value={player.name}
          />
        </div> :
        <Config />
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
    },
    changeSetMarkerRadius: (radius) => {
      dispatch(changeSetMarkerRadius(radius))
    },
    changeSetupConfigClass: (className) => {
      dispatch(changeSetupConfigClass(className))
    },
    changeSetMarkerCoords: (coords) => {
      dispatch(changeSetMarkerCoords(coords))
    }
  }
}

const Config = connect(mapStateToProps, mapDispatchToProps)(config)

export default connect(mapStateToProps, mapDispatchToProps)(SetupContainer)
