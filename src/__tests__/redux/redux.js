import Update                               from 'immutability-helper';
import * as constant                        from '../../redux/constants/constants'
import fetchMock                            from 'fetch-mock'

//ACTION IMPORTS
import * as actions                         from '../../redux/actions/gameActions'
import * as playerActions                   from '../../redux/actions/playerActions'
import * as uiActions                       from '../../redux/actions/uiActions'

//REDUCER IMPORTS
import {defaultState as gameState}          from '../../redux/reducers/gameReducer'
import {defaultState as playerState}        from '../../redux/reducers/playerReducer'
import {defaultState as uiState}            from '../../redux/reducers/uiReducer'
import rootReducer                          from '../../redux/reducers/rootReducer'

let state = {
  game: {
    ...gameState
  },
  ui: {
    ...uiState
  },
  player: {
    ...playerState
  }
}

//TESTS
//ASYNC REQUESTS
describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
​
//   it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//     fetchMock.getOnce('/todos', {
//       body: {
//         todos: ['do something']
//       }, headers: {
//         'content-type': 'application/json'
//       }
//     })
// ​
// ​
//     const expectedActions = [
//       { type: types.FETCH_TODOS_REQUEST },
//       { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
//     ]
//     const store = mockStore({ todos: [] })
// ​
//     return store.dispatch(actions.fetchTodos()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions)
//     })
// })
})

//GAME ACTIONS/REDUCERS
describe('REDUX ACTIONS GAME', () => {
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

  it('should create an action to change the map marker\'s coordinates', () => {
    const coords = [-77, 38.9]
    const expectedAction = {
      type: constant.CHANGE_MARKER_COORDS,
      payload: {
        mapMarkerCoords: coords
      }
    }
    expect(actions.changeMarkerCoords(coords)).toEqual(expectedAction)
  })

  it('should create an action to set the game ID', () => {
    const id = '1aC'
    const expectedAction = {
      type: constant.SET_GAME_ID,
      payload: { id }
    }
    expect(actions.setGameID(id)).toEqual(expectedAction)
  })
})

//REDUCERS
describe('REDUX REDUCERS GAME', () => {
  it('should return the initial state', ()=>{
    expect(rootReducer(undefined, {})).toEqual(state)
  })

  it('should update title in state', ()=>{
    expect(rootReducer({}, {
      type: constant.CHANGE_GAME_TITLE,
      payload: {
        title: 'test1'
      }
    })).toEqual(
      Update(state,
        {game:
          { title: { $set: 'test1'}}
        }
      )
    )
  })

  it('should update coordinates in state', ()=>{
    const coords = [-77, 38.9]
    expect(rootReducer({}, {
      type: constant.CHANGE_MARKER_COORDS,
      payload: {
        mapMarkerCoords: coords
      }
    })).toEqual(
      Update(state,
        {game:
          { mapMarkerCoords: { $set: coords}}
        }
      )
    )
  })
})

//PLAYER ACTIONS/REDUCERS
describe('REDUX ACTIONS PLAYER', () => {
  it('should create an action to change user name', () => {
    const text = 'Kevin'
    const expectedAction = {
      type: constant.CHANGE_PLAYER_NAME,
      payload: {
        name: text
      }
    }
    expect(playerActions.changePlayerName(text)).toEqual(expectedAction)
  })
})

//REDUCERS
describe('REDUX REDUCERS PLAYER', () => {
  it('should change player name in state', ()=>{
    const name = 'Kevin'
    expect(rootReducer({}, {
      type: constant.CHANGE_PLAYER_NAME,
      payload: {
        name: name
      }
    })).toEqual(
      Update(state,
        {player:
          { name: { $set: name}}
        }
      )
    )
  })
})

//UI ACTIONS/REDUCERS
describe('REDUX ACTIONS UI', () => {
  it('should create an action to change requestHostName', () => {
    const request = false
    const expectedAction = {
      type: constant.CHANGE_REQUEST_HOST_NAME,
      payload: {
        requestHostName: request
      }
    }
    expect(uiActions.changeRequestHostName(request)).toEqual(expectedAction)
  })

  it('should create an action to change name holder class', () => {
    const className = 'new class'
    const expectedAction = {
      type: constant.CHANGE_NAME_HOLDER_CLASS,
      payload: {
        nameHolderClass: className
      }
    }
    expect(uiActions.changeNameHolderClass(className)).toEqual(expectedAction)
  })
})

//REDUCERS
describe('REDUX REDUCERS UI', () => {
  it('should change requestHostName to false in state', ()=>{
    expect(rootReducer({}, {
      type: constant.CHANGE_REQUEST_HOST_NAME,
      payload: {
        requestHostName: false
      }
    })).toEqual(
      Update(state,
        {ui:
          { requestHostName: { $set: false}}
        }
      )
    )
  })

  it('should change name holder class name to name__holder name__holder__deactive', ()=>{
    const className = 'name__holder name__holder__deactive'
    expect(rootReducer({}, {
      type: constant.CHANGE_NAME_HOLDER_CLASS,
      payload: {
        nameHolderClass: className
      }
    })).toEqual(
      Update(state,
        {ui:
          { nameHolderClass: { $set: className}}
        }
      )
    )
  })
})
