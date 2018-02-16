//DEPENDENCIES
import { combineReducers }      from 'redux'

//REDUCERS
import { gameReducer }          from './gameReducer'
import { playerReducer }        from './playerReducer'

const rootReducer = combineReducers({
  game: gameReducer,
  player: playerReducer
})

export default rootReducer
