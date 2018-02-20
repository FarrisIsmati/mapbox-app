import {
        CHANGE_PLAYER_NAME,
        SET_HOST_TYPE,
        CHANGE_ACTIVE_HANDLER
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

//Sets whether user is host or not
export function setHostType(bool){
  return {
    type: SET_HOST_TYPE,
    payload: {
      host: bool
    }
  }
}

//Sets who can handle the marker
export function changeActiveHandler(bool){
  return {
    type: CHANGE_ACTIVE_HANDLER,
    payload: {
      activeHandler: bool
    }
  }
}
