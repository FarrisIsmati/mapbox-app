import {
        CHANGE_REQUEST_HOST_NAME,
        CHANGE_NAME_HOLDER_CLASS,
        CHANGE_SETUP_CONFIG_CLASS,
        CHANGE_SETUP_CONFIG_SETBTN_CLASS,
        CHANGE_SETUP_CONFIG_STARTBTN_CLASS
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

//Changes class name of config setup btn
export function changeSetupConfigSetBTNClass(className){
  return {
    type: CHANGE_SETUP_CONFIG_SETBTN_CLASS,
    payload: {
      setupConfigSetBTNClass: className
    }
  }
}

//Changes class name of config start btn
export function changeSetupConfigStartBTNClass(className){
  return {
    type: CHANGE_SETUP_CONFIG_STARTBTN_CLASS,
    payload: {
      setupConfigStartBTNClass: className
    }
  }
}
