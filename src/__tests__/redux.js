import * as actions                  from '../redux/actions/gameActions'
import * as constant                 from '../redux/constants/constants'
import {defaultState as gameState}   from '../redux/reducers/gameReducer'
import rootReducer                   from '../redux/reducers/rootReducer'

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
})

//REDUCERS
describe('REDUX REDUCERS', () => {
  it('should return the initial state', ()=>{
    expect(rootReducer(undefined, {})).toEqual({
      game: {
        ...gameState
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
        ...gameState, ...{title: 'test1'}
      }
    })
  })

  it('should update coordinates in state', ()=>{
    const coords = [-77, 38.9]
    expect(rootReducer({}, {
      type: constant.CHANGE_MARKER_COORDS,
      payload: {
        mapMarkerCoords: coords
      }
    })).toEqual({
      game: {
        ...gameState, ...{mapMarkerCoords: coords}
      }
    })
  })
})
