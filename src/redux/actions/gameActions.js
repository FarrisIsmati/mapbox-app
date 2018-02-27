import axios                 from "axios"
import {
        CHANGE_GAME_TITLE,
        SET_GAME_ID,
        CHANGE_MARKER_COORDS,
        CHANGE_SET_MARKER_COORDS,
        CHANGE_SET_MARKER_RADIUS
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

//Update Radius of Set GEOJSON
function changeSetMarkerCoordsAPI(coords){
  return {
    type: CHANGE_SET_MARKER_COORDS,
    payload: {
      setMarkerCoords: coords
    }
  }
}

//Changes the set coordinates of the game
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
