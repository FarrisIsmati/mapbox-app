import {
        CHANGE_REQUEST_HOST_NAME,
        CHANGE_NAME_HOLDER_CLASS,
        CHANGE_SETUP_CONFIG_CLASS,
        CHANGE_SETUP_CONFIG_SETBTN_CLASS,
        CHANGE_SETUP_CONFIG_STARTBTN_CLASS
}                            from "../constants/constants"

//Exported only for testing purposes
export const defaultState = {
  requestHostName: true,
  nameHolderClass: 'name__holder name__holder__active',
  setupConfigClass: 'setupconfig__holder setupconfig__holder__deactive',
  setupConfigSetBTNClass: 'button__one button__one__deactive',
  setupConfigStartBTNClass: 'button__one button__one__deactive'
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
    case CHANGE_SETUP_CONFIG_CLASS:
      return {
        ...state, ...action.payload
      }
    case CHANGE_SETUP_CONFIG_SETBTN_CLASS:
      return {
        ...state, ...action.payload
      }
    case CHANGE_SETUP_CONFIG_STARTBTN_CLASS:
      return {
        ...state, ...action.payload
      }
    default:
      return state
  }
}
