import axios                 from "axios"
import {
        CHANGE_GAME_TITLE,
        SET_GAME_ID,
        CHANGE_MARKER_COORDS,
        CHANGE_SET_MARKER_COORDS,
        CHANGE_SET_MARKER_RADIUS,
        CHANGE_ACTIVE_STATE,
        CHANGE_RESET_COORDS,
        SUBMIT_TO_CHATLOG,
        SET_GUESSES,
        CHANGE_GUESS
}                            from "../constants/constants"

//Changes title of the game
export function changeGameTitle(gameTitle){
  return {
    type: CHANGE_GAME_TITLE,
    payload: {
      title: gameTitle
    }
  }
}

//Sets ID of the game
export function setGameID(id){
  return {
    type: SET_GAME_ID,
    payload: {
      id: id
    }
  }
}

//Changes coordinates of the map marker
export function changeMarkerCoords(coords){
  return {
    type: CHANGE_MARKER_COORDS,
    payload: {
      mapMarkerCoords: coords
    }
  }
}

//Change active state of game
//Exported so I dont have to make the API call when mounting GameContainer
export function changeActiveStateAPI(bool){
  return {
    type: CHANGE_ACTIVE_STATE,
    payload: {
      active: bool
    }
  }
}

export function changeActiveState(id, bool){
  return function(dispatch){
    axios.put('http://localhost:3001/game/active/' + id,{
      "active": bool
    })
    .then(()=>{
      dispatch(changeActiveStateAPI(bool))
    })
  }
}

//Update coordinates of set marker
function changeSetMarkerCoordsAPI(coords){
  return {
    type: CHANGE_SET_MARKER_COORDS,
    payload: {
      setMarkerCoords: coords
    }
  }
}

export function changeSetMarkerCoords(id, coords){
  return function(dispatch){
    axios.put('http://localhost:3001/game/coordinates/' + id,{
      "coordinates": coords
    })
    .then(()=>{
      dispatch(changeSetMarkerCoordsAPI(coords))
    })
  }
}

//Update Radius of Set GEOJSON
function changeSetMarkerRadiusAPI(radius){
  return {
    type: CHANGE_SET_MARKER_RADIUS,
    payload: {
      setMarkerRadius: radius
    }
  }
}

export function changeSetMarkerRadius(id, radius){
  return function(dispatch){
    axios.put('http://localhost:3001/game/radius/' + id,{
      "radius": radius
    })
    .then(()=>{
      dispatch(changeSetMarkerRadiusAPI(radius))
    })
  }
}

export function changeResetCoords(bool){
  return {
    type: CHANGE_RESET_COORDS,
    payload: {
      resetCoords: bool
    }
  }
}

export function submitToChatlog(chatData, id){
  return {
    type: SUBMIT_TO_CHATLOG,
    payload: {
      ...chatData
    }
  }
}

export function setGuesses(guesses){
  return {
    type: SET_GUESSES,
    payload: { guesses }
  }
}

export function changeGuessAPI(amount){
    return {
      type: CHANGE_GUESS,
      payload: amount
    }
}

export function changeGuess(amount, host, id){
  return function(dispatch){
    axios.put('http://localhost:3001/game/guesses/' + id,{
      "amount": amount,
      "host": host
    })
    .then(()=> dispatch(changeGuessAPI(amount)))
    .catch(err => console.log(err))
  }
}
