import {
        CHANGE_PLAYER_NAME,
}                            from "../constants/constants"

//Exported only for testing purposes
export const defaultState = {
  name: ''
}

export function playerReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_PLAYER_NAME:
      return {
        ...state, ...action.payload
      }
    default:
      return state
  }
}
