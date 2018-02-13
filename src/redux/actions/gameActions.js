import {
        CHANGE_GAME_TITLE,
        CHANGE_MARKER_COORDS
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
