import {
        CHANGE_GAME_TITLE,
        CHANGE_MARKER_COORDS,
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

//Changes coordinates of the map marker
export function changeMarkerCoords(coords){
  return {
    type: CHANGE_MARKER_COORDS,
    payload: {
      mapMarkerCoords: coords
    }
  }
}

//Changes the radius the marker will have
export function changeSetMarkerRadius(radius){
  return {
    type: CHANGE_SET_MARKER_RADIUS,
    payload: {
      setMarkerRadius: parseInt(radius)
    }
  }
}
