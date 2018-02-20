import {
        CHANGE_PLAYER_NAME,
        SET_HOST_TYPE,
        CHANGE_ACTIVE_HANDLER
}                            from "../constants/constants"

//Exported only for testing purposes
export const defaultState = {
  name: '',
  host: false,
  activeHandler: true
}

export function playerReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_PLAYER_NAME:
      return {
        ...state, ...action.payload
      }
    case SET_HOST_TYPE:
      return {
        ...state, ...action.payload
      }
    case CHANGE_ACTIVE_HANDLER:
      return {
        ...state, ...action.payload
      }
    default:
      return state
  }
}
