import {
        CHANGE_REQUEST_HOST_NAME,
        CHANGE_NAME_HOLDER_CLASS
}                            from "../constants/constants"

//Exported only for testing purposes
export const defaultState = {
  requestHostName: true,
  nameHolderClass: 'name__holder name__holder__active'
}

export function uiReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_REQUEST_HOST_NAME:
      return {
        ...state, ...action.payload
      }
    case CHANGE_NAME_HOLDER_CLASS:
      return {
        ...state, ...action.payload
      }
    default:
      return state
  }
}
