//DEPENDENCIES
import React, { Component }           from 'react'
import { connect }                    from 'react-redux'

//COMPONENTS
import newGame                        from '../components/new/NewGame'

//REDUX
import {
          changeGameTitle
        }                             from '../redux/actions/gameActions'

class NewContainer extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <NewGame />
    )
  }
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
