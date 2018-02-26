import {
        CHANGE_REQUEST_HOST_NAME,
        CHANGE_NAME_HOLDER_CLASS,
        CHANGE_SETUP_CONFIG_CLASS
}                            from "../constants/constants"


//Changes name of the user
export function changeRequestHostName(request){
  return {
    type: CHANGE_REQUEST_HOST_NAME,
    payload: {
      requestHostName: request
    }
  }
}

//Changes class name of name holder div
export function changeNameHolderClass(className){
  return {
    type: CHANGE_NAME_HOLDER_CLASS,
    payload: {
      nameHolderClass: className
    }
  }
}

//Changes class name of name holder div
export function changeSetupConfigClass(className){
  return {
    type: CHANGE_SETUP_CONFIG_CLASS,
    payload: {
      setupConfigClass: className
    }
  }
}
