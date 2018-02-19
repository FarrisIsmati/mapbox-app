import {
        CHANGE_REQUEST_HOST_NAME,
}                            from "../constants/constants"


//Changes name of the user
export function changeRequestHostName(){
  return {
    type: CHANGE_REQUEST_HOST_NAME,
    payload: {
      requestHostName: false
    }
  }
}
