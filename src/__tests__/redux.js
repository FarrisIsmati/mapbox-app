import * as actions                         from '../redux/actions/gameActions'
import * as playerActions                   from '../redux/actions/playerActions'
import * as constant                        from '../redux/constants/constants'
import {defaultState as gameState}          from '../redux/reducers/gameReducer'
import {defaultState as playerState}        from '../redux/reducers/playerReducer'
import rootReducer                          from '../redux/reducers/rootReducer'

//GAME

//ACTIONS
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
})

//REDUCERS
describe('REDUX REDUCERS GAME', () => {
  it('should return the initial state', ()=>{
    expect(rootReducer(undefined, {})).toEqual({
      game: {
        ...gameState
      },
      player: {
        ...playerState
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
      },
      player: {
        ...playerState
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
      },
      player: {
        ...playerState
      }
    })
  })
})

//PLAYER

//ACTIONS
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
  it('should player name in state', ()=>{
    expect(rootReducer({}, {
      type: constant.CHANGE_PLAYER_NAME,
      payload: {
        name: 'Kevin'
      }
    })).toEqual({
      game: {
        ...gameState
      },
      player: {
        ...playerState, ...{name: 'Kevin'}
      }
    })
  })
})
