//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'
import axios                          from 'axios'

//COMPONENTS
import home                           from '../components/home/Home'
import MapBackground                  from '../components/mapbox/MapBackground'

//REDUX
import { changeGameTitle,
         setGameID
       }                              from '../redux/actions/gameActions'
import { setHostType,
         setPlayerIP
       }                              from '../redux/actions/playerActions'

//Upon Starting the game set host to active
const startGame = (game,player,history,setPlayerIP,setHostType,setGameID) => {
  axios.post(`http://localhost:3001/game`, {
    title: game.title,
    completed: game.completed,
    active: game.active,
    host: {
      active: true
    }
  })
  .then((response) => {
    setGameID(response.data._id)
    setPlayerIP(response.data.host.ip)
    setHostType(true)
    history.push('/game/' + response.data._id)
  })
  .catch((err) => {console.log(err)})
}

const HomeContainer = ({history}) => {
  return(
    <div className="home__holder">
      <Home history={history} startGame={startGame} />
      <MapBackground />
    </div>
  )
}

const mapStateToProps = (state) => ({...state})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeGameTitle: (title) => {
      dispatch(changeGameTitle(title))
    },
    setGameID: (id) => {
      dispatch(setGameID(id))
    },
    setHostType: (bool) => {
      dispatch(setHostType(bool))
    },
    setPlayerIP: (ip) => {
      dispatch(setPlayerIP(ip))
    }
  }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(home)

export default HomeContainer
