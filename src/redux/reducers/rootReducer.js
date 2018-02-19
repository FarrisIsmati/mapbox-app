//DEPENDENCIES
import { combineReducers }      from 'redux'

//REDUCERS
import { gameReducer }          from './gameReducer'
import { playerReducer }        from './playerReducer'
import { uiReducer }            from './uiReducer'

const rootReducer = combineReducers({
  game: gameReducer,
  ui: uiReducer,
  player: playerReducer
})

export default rootReducer
