import {
        CHANGE_GAME_TITLE,
        CHANGE_MARKER_COORDS,
        CHANGE_SET_MARKER_RADIUS,
        CHANGE_SET_MARKER_COORDS
}                            from "../constants/constants"

//Exported only for testing purposes
export const defaultState = {
  title: '@%#!,',
  mapMarkerCoords: [-77, 38.8],
  setMarkerCoords: [null,null],
  setMarkerRadius: '0'
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
    case CHANGE_SET_MARKER_COORDS:
      return {
        ...state, ...action.payload
      }
    case CHANGE_SET_MARKER_RADIUS:
      return {
        ...state, ...action.payload
      }
    default:
      return state
  }
}
