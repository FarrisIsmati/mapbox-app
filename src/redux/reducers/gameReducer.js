import {
        CHANGE_GAME_TITLE,
        SET_GAME_ID,
        CHANGE_MARKER_COORDS,
        CHANGE_SET_MARKER_RADIUS,
        CHANGE_SET_MARKER_COORDS,
        CHANGE_ACTIVE_STATE
}                            from "../constants/constants"

//Exported only for testing purposes
export const defaultState = {
  title: '@%#!,',
  completed: false,
  active: false,
  mapMarkerCoords: [-77, 38.8],
  setMarkerCoords: [-77, 38.8],
  setMarkerRadius: '0'
}

export function gameReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_GAME_TITLE:
      return {
        ...state, ...action.payload
      }
    case SET_GAME_ID:
      return {
        ...state, ...action.payload
      }
    case CHANGE_ACTIVE_STATE:
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
