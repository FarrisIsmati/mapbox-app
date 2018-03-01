//DEPENDENCIES
import React, { Component }           from 'react'
import { connect }                    from 'react-redux'
import axios                          from 'axios'

//COMPONENTS
import SetupContainer                 from './SetupContainer'
import PlayContainer                  from './PlayContainer'
import mapGame                        from '../components/mapbox/MapGame'

//REDUX
import {
          changePlayerName
        }                             from '../redux/actions/playerActions'
import {
          changeNameHolderClass
        }                             from '../redux/actions/uiActions'
import {
          changeGameTitle,
          changeMarkerCoords,
          changeActiveStateAPI,
          setGameID
        }                             from '../redux/actions/gameActions'

class GameContainer extends Component {
  constructor() {
    super()
    this.state = {loaded: false}
  }

  //Before mounting the game if you are not a host && game is active you will get necessary data in your state
  componentWillMount(){
    if (!this.props.player.host){
      axios.get('http://localhost:3001' + this.props.history.location.pathname)
      .then((json)=>{
        const data = json.data
        let { changePlayerName, changeNameHolderClass, changeGameTitle, changeActiveStateAPI, setGameID } = this.props
        //If the game is active then you can join and get basic data otherwise you cant
        if (data.active){
          changeGameTitle(data.title)
          changeActiveStateAPI(data.active)
          setGameID(data._id)
        }
        this.setState({loaded: true})
      })
      .catch((err)=>{
        console.log(err)
      })
    } else {
      this.setState({loaded: true})
    }
  }

  render() {
    return(
      <div className="fullheight">
        { this.state.loaded ?
          <div className="gamecontainer__holder">
            { !this.props.game.active ?
              <SetupContainer history={this.props.history} /> :
              <PlayContainer />
            }
          </div> :
          null
        }
        <MapGame />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeMarkerCoords: (coords) => {
      dispatch(changeMarkerCoords(coords))
    },
    changeActiveStateAPI: (bool) => {
      dispatch(changeActiveStateAPI(bool))
    },
    changeNameHolderClass: (className) => {
      dispatch(changeNameHolderClass(className))
    },
    changePlayerName: (playerName) => {
      dispatch(changePlayerName(playerName))
    },
    changeGameTitle : (title) => {
      dispatch(changeGameTitle(title))
    },
    setGameID: (id) => {
      dispatch(setGameID(id))
    }
  }
}

const MapGame = connect(mapStateToProps, mapDispatchToProps)(mapGame)

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
