//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'
import axios                          from 'axios'

//COMPONENTS
import home                           from '../components/home/Home'

//REDUX
import { changeGameTitle }            from '../redux/actions/gameActions'

const startGame = (game,player) => {
  axios.post(`http://localhost:3001/game`, {
    title: game.title,
    completed: game.completed,
    active: game.active
  })
  .then((response) => {
    let gameId = response.data._id
    //Redirect via history push
  })
  .catch((err) => {console.log(err)})
}

const HomeContainer = () => {
  return(
    <Home startGame={startGame} />
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

const Home = connect(mapStateToProps, mapDispatchToProps)(home)

export default HomeContainer
