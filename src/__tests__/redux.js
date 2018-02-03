import * as actions     from '../redux/actions/gameActions'
import * as constant    from '../redux/constants/constants'
import rootReducer      from '../redux/reducers/rootReducer'

//ACTIONS
describe('REDUX ACTIONS', () => {
  it('should create an action to change game title', () => {
    const text = 'test'
    const expectedAction = {
      type: constant.CHANGE_GAME_TITLE,
      payload: {
        title: text
      }
    }
    expect(actions.changeGameTitle(text)).toEqual(expectedAction)
  })
})

//REDUCERS
describe('REDUX REDUCERS', () => {
  it('should return the initial state', ()=>{
    expect(rootReducer(undefined, {})).toEqual({
      game: {
        title: '@%#!,'
      }
    })
  })

  it('should update title in state', ()=>{
    expect(rootReducer({}, {
      type: constant.CHANGE_GAME_TITLE,
      payload: {
        title: 'test1'
      }
    })).toEqual({
      game: {
        title: 'test1'
      }
    })
  })
})
