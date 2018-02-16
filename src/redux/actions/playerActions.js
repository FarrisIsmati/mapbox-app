import {
        CHANGE_PLAYER_NAME,
}                            from "../constants/constants"


//Changes name of the user
export function changePlayerName(playerName){
  return {
    type: CHANGE_PLAYER_NAME,
    payload: {
      name: playerName
    }
  }
}
