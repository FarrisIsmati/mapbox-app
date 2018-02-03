import {
        CHANGE_GAME_TITLE,
}                            from "../constants/constants"

const defaultState = {
  title: '@%#!,'
}

export function gameReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_GAME_TITLE:
      return {
        ...state, ...action.payload
      }
    default:
      return state
  }
}
