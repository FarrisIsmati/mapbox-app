import axios                 from 'axios'
import {
        CHANGE_PLAYER_NAME,
        SET_HOST_TYPE,
        CHANGE_ACTIVE_HANDLER,
        SET_PLAYER_IP,
        SET_OPPONENT_NAME
}                            from "../constants/constants"


//Changes name of the user
export function changePlayerName(playerName){
  return {
    type: CHANGE_PLAYER_NAME,
    payload: {
      name: playerName
    }
  }
}

//Sets whether user is host or not
export function setHostType(bool){
  return {
    type: SET_HOST_TYPE,
    payload: {
      host: bool
    }
  }
}

function changeActiveHandlerAPI(bool){
  return {
    type: CHANGE_ACTIVE_HANDLER,
    payload: {
      activeHandler: bool
    }
  }
}

//Sets who can handle the marker
export function changeActiveHandler(id, isActive, isHost){
  return function(dispatch){
    axios.put('http://localhost:3001/game/activeHandler/' + id,{
      "host": isHost,
      "active": isActive
    })
    .then(()=>{
      dispatch(changeActiveHandlerAPI(isActive))
    })
  }
}

export function setPlayerIP(ip) {
  return {
    type: SET_PLAYER_IP,
    payload: {
      ip: ip
    }
  }
}

export function setOpponentName(name) {
  return {
    type: SET_OPPONENT_NAME,
    payload: {
      name: name
    }
  }
}
