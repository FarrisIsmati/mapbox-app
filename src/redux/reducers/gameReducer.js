import {
        CHANGE_GAME_TITLE,
        CHANGE_MARKER_COORDS
}                            from "../constants/constants"

//Exported only for testing purposes
export const defaultState = {
  title: '@%#!,',
  mapMarkerCoords: [-77, 38.8]
}

export function gameReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_GAME_TITLE:
      return {
        ...state, ...action.payload
      }
    case CHANGE_MARKER_COORDS:
      return {
        ...state, ...action.payload
      }
    default:
      return state
  }
}
