//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'

//COMPONENTS
import name                           from '../components/setup/Name'

//REDUX
import {
          changePlayerName
        }                             from '../redux/actions/playerActions'

const SetupContainer = () => {
  return(
    <div className="setupcontainer__holder fullheight">
      <Name />
    </div>
  )
}

const mapStateToProps = (state) => ({...state})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changePlayerName: (playerName) => {
      dispatch(changePlayerName(playerName))
    }
  }
}

const Name = connect(mapStateToProps, mapDispatchToProps)(name)

export default SetupContainer
