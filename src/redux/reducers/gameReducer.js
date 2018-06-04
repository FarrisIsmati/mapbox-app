import {
        CHANGE_GAME_TITLE,
        SET_GAME_ID,
        CHANGE_MARKER_COORDS,
        CHANGE_SET_MARKER_RADIUS,
        CHANGE_SET_MARKER_COORDS,
        CHANGE_ACTIVE_STATE,
        CHANGE_RESET_COORDS,
        SUBMIT_TO_CHATLOG,
        SET_GUESSES,
        CHANGE_GUESS,
        CHANGE_COMPLETE_GAME
}                            from "../constants/constants"

//Exported only for testing purposes
export const defaultState = {
  title: '@%#!,',
  completed: false,
  active: false,
  guesses: 10,
  mapMarkerCoords: [0,0],
  setMarkerCoords: [0,0],
  setMarkerRadius: '0',
  resetCoords: false,
  chatLog: []
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
    case CHANGE_RESET_COORDS:
      return {
        ...state, ...action.payload
      }
    case SUBMIT_TO_CHATLOG:
      return {
        ...state, chatLog: [...state.chatLog, action.payload]
      }
    case SET_GUESSES:
      return {
        ...state, ...action.payload
      }
    case CHANGE_GUESS:
      return {
        ...state, guesses: state.guesses + action.payload
      }
    case CHANGE_COMPLETE_GAME:
      return {
        ...state, ...action.payload
      }
    default:
      return state
  }
}
