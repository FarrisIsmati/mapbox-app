//DEPENDENCIES
import { combineReducers }      from 'redux'

//REDUCERS
import { gameReducer }          from './gameReducer'

const rootReducer = combineReducers({
  ...gameReducer
})

export default rootReducer
