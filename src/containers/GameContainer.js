//DEPENDENCIES
import React, { Component }           from 'react'
import { connect }                    from 'react-redux'
import axios                          from 'axios'

//COMPONENTS
import config                         from '../components/setup/Config'
import game                           from '../components/game/Game'
import mapGame                        from '../components/mapbox/MapGame'
import play                           from '../components/play/Play'

//REDUX
import {
          changePlayerName,
          setHostType,
          changeActiveHandler,
          setOpponentName
        }                             from '../redux/actions/playerActions'
import {
          changeRequestHostName,
          changeNameHolderClass,
          changeSetupConfigClass,
          changeSetupPlayClass
        }                             from '../redux/actions/uiActions'
import {
          changeGameTitle,
          changeMarkerCoords,
          changeSetMarkerRadius,
          changeSetMarkerCoords,
          changeActiveState,
          changeResetCoords,
          changeActiveStateAPI,
          setGameID,
          submitToChatlog,
          changeGuess,
          changeCompleteGame
        }                             from '../redux/actions/gameActions'

class GameContainer extends Component {
  constructor() {
    super()
    this.state = {loaded: false}

    this.onSubmitName = this.onSubmitName.bind(this)
    this.setMarker = this.setMarker.bind(this)
    this.startGame = this.startGame.bind(this)
  }

  //Upon submitting name animate fade away and disable text area
  //requestHostName set to false in store
  //Set player to host
  //Update name in backend
  onSubmitName(e, input) {
    e.preventDefault()
    input.disabled = true
    let self = this
    this.props.changeNameHolderClass('name__holder name__holder__deactive')

    if (this.props.player.name === ''){
      this.props.changePlayerName('ANONYMOUS');
    }

    axios.put('https://mapboxwhereisit.herokuapp.com/game/name/' + this.props.game.id,{
      'name': this.props.player.name,
      'host': this.props.player.host
    })
    .then(()=>{
      setTimeout(()=>{
        self.props.changeRequestHostName(false)
      }, 1600)
    })
  }

  setMarker(e, radius, coords) {
    //So this function can be called outside a form submit
    if (e) {
      e.preventDefault()
    }
    this.props.changeSetMarkerRadius(this.props.game.id, radius)
    this.props.changeSetMarkerCoords(this.props.game.id, coords)
  }

  //Sets the game up to be active so you can start playing and disables the setup container after the timeout
  startGame() {
    let self = this
    this.props.changeSetupConfigClass("setupconfig__holder setupconfig__holder__deactive")
    setTimeout(()=>{
      self.props.changeResetCoords(true)
      self.props.changeMarkerCoords([0,0])
      self.props.changeResetCoords(false)
      self.props.changeActiveHandler(this.props.game.id, false, true)
      self.props.changeActiveState(this.props.game.id, true)
    }, 1600)
  }

  //Before mounting the game if you are not a host && game is active && game is not full you will get necessary data in your state
  componentWillMount(){
    if (!this.props.player.host){
      axios.get('https://mapboxwhereisit.herokuapp.com' + this.props.history.location.pathname)
      .then((json)=>{
        const data = json.data
        let {
          changeGameTitle,
          changeActiveStateAPI,
          setGameID
        } = this.props
        //If the game is active, not completed, then you can join and get basic data otherwise you cant
        if (data.active && !data.player && !data.completed){
          changeGameTitle(data.title)
          changeActiveStateAPI(data.active)
          setGameID(data._id)
          this.setState({loaded: true})
        } else {
          this.props.history.push('/')
        }
      })
      .catch((err)=>{
        this.props.history.push('/');
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
              <Game onSubmitName={this.onSubmitName}>
                <Config
                  setMarker={this.setMarker}
                  startGame={this.startGame}
                />
              </Game> :
              <Game onSubmitName={this.onSubmitName}>
                <Play />
              </Game>
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
    setHostType: (bool) => {
      dispatch(setHostType(bool))
    },
    changeRequestHostName: (request) => {
      dispatch(changeRequestHostName(request))
    },
    changeSetMarkerRadius: (id, radius) => {
      dispatch(changeSetMarkerRadius(id, radius))
    },
    changeSetupConfigClass: (className) => {
      dispatch(changeSetupConfigClass(className))
    },
    changeSetupPlayClass: (className) => {
      dispatch(changeSetupPlayClass(className))
    },
    changeSetMarkerCoords: (id, coords) => {
      dispatch(changeSetMarkerCoords(id, coords))
    },
    changeActiveState: (id, bool) => {
      dispatch(changeActiveState(id, bool))
    },
    changeActiveHandler: (id, isActive, isHost) => {
      dispatch(changeActiveHandler(id, isActive, isHost))
    },
    changeResetCoords: (bool) => {
      dispatch(changeResetCoords(bool))
    },
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
    },
    submitToChatlog: (chatData, id) => {
      dispatch(submitToChatlog(chatData, id))
    },
    changeCompleteGame: (completed, id) => {
      dispatch(changeCompleteGame(completed, id))
    },
    //This async redux action returns a promise unlike the others
    changeGuess: (amount, host, id) => dispatch(changeGuess(amount, host, id)),
    setOpponentName: (name) => {
      dispatch(setOpponentName(name))
    }
  }
}

const Play = connect(mapStateToProps, mapDispatchToProps)(play)
const Game = connect(mapStateToProps, mapDispatchToProps)(game)
const MapGame = connect(mapStateToProps, mapDispatchToProps)(mapGame)
const Config = connect(mapStateToProps, mapDispatchToProps)(config)

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
