//DEPENDENCIES
import { combineReducers }      from 'redux'

//REDUCERS
import { gameReducer }          from './gameReducer'

const rootReducer = combineReducers({
  game: gameReducer
})

export default rootReducer
