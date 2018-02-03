//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'

//COMPONENTS
import newGame                        from '../components/new/NewGame'

//REDUX
import {
          changeGameTitle
        }                             from '../redux/actions/gameActions'

const NewContainer = () => {
  return(
    <NewGame />
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

const NewGame = connect(mapStateToProps, mapDispatchToProps)(newGame)

export default connect(mapStateToProps)(NewContainer)
