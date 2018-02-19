import {
        CHANGE_REQUEST_HOST_NAME,
}                            from "../constants/constants"

//Exported only for testing purposes
export const defaultState = {
  requestHostName: true
}

export function uiReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_REQUEST_HOST_NAME:
      return {
        ...state, ...action.payload
      }
    default:
      return state
  }
}
