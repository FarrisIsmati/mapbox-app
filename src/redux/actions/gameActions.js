import {
        CHANGE_GAME_TITLE,
}                            from "../constants/constants"

export function changeGameTitle(gameTitle){
  return {
    type: CHANGE_GAME_TITLE,
    payload: {
      title: gameTitle
    }
  }
}
