//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'

//COMPONENTS
import startGame                      from '../components/start/StartGame'

//REDUX
import {
          changeGameTitle
        }                             from '../redux/actions/gameActions'

const StartContainer = () => {
  return(
    <StartGame />
  )
}

const mapStateToProps = (state) => ({...state})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeGameTitle: (title) => {
      dispatch(changeGameTitle(title))
    }
  }
}

const StartGame = connect(mapStateToProps, mapDispatchToProps)(startGame)

export default connect(mapStateToProps)(StartContainer)
