//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'

//COMPONENTS
import SetupContainer                 from './SetupContainer'
import PlayContainer                  from './PlayContainer'
import mapGame                        from '../components/mapbox/MapGame'

//REDUX
import {
          changeMarkerCoords
        }                             from '../redux/actions/gameActions'

const GameContainer = ({history, game}) => {
  return(
    <div className="gamecontainer__holder fullheight">
      { !game.active ?
        <SetupContainer history={history} /> :
        <PlayContainer />
      }
      <MapGame />
    </div>
  )
}

const mapStateToProps = (state) => ({...state})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeMarkerCoords: (coords) => {
      dispatch(changeMarkerCoords(coords))
    }
  }
}

const MapGame = connect(mapStateToProps, mapDispatchToProps)(mapGame)

export default connect(mapStateToProps)(GameContainer)
