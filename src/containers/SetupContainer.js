//DEPENDENCIES
import React, { Component }           from 'react'
import { connect }                    from 'react-redux'
import axios                          from 'axios'

//COMPONENTS
import config                         from '../components/setup/Config'
import Input1                         from '../components/common/inputs/Input1'


//REDUX
import {
          changePlayerName,
          setHostType
        }                             from '../redux/actions/playerActions'
import {
          changeRequestHostName,
          changeNameHolderClass,
          changeSetupConfigClass
        }                             from '../redux/actions/uiActions'
import {
          changeGameTitle,
          changeSetMarkerRadius,
          changeSetMarkerCoords
        }                             from '../redux/actions/gameActions'

class SetupContainer extends Component {
  constructor(){
    super()

    this.onSubmitName = this.onSubmitName.bind(this)
    this.setMarker = this.setMarker.bind(this)
  }

  //Upon submitting name animate fade away and disable text area
  //requestHostName set to false in store
  //Set player to host
  onSubmitName(e=null, input=null) {
    //So this function can be called outside a form submit
    if (e){
      e.preventDefault()
      input.disabled = true
    }
    let self = this
    this.props.changeNameHolderClass('name__holder name__holder__deactive')
    setTimeout(()=>{
      self.props.changeRequestHostName(false)
    }, 1600)
  }

  setMarker(e, radius, coords) {
    //So this function can be called outside a form submit
    if (e) {
      e.preventDefault()
    }
    this.props.changeSetMarkerRadius(this.props.game.id, radius)
    this.props.changeSetMarkerCoords(this.props.game.id, coords)
  }

  //If you didnt start the game redirect
  //This will remove you if you refresh as well (IF you want that functionality back check out the utility helper for host IP address checking and state saving)
  componentDidMount() {
    if (!this.props.player.host) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className="setupcontainer__holder">
        { this.props.ui.requestHostName ?
          <div className={this.props.ui.nameHolderClass}>
            <Input1
              onSubmit={(e, input)=> this.onSubmitName(
                e,
                input
              )}
              className={"input"}
              maxLength={"14"}
              placeholder={"YOUR NAME"}
              onChange={e => this.props.changePlayerName(e.target.value.toUpperCase())}
              value={this.props.player.name}
            />
          </div> :
          <Config setMarker={this.setMarker} />
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => ({...state})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeGameTitle : (title) => {
      dispatch(changeGameTitle(title))
    },
    changePlayerName: (playerName) => {
      dispatch(changePlayerName(playerName))
    },
    setHostType: (bool) => {
      dispatch(setHostType(bool))
    },
    changeRequestHostName: (request) => {
      dispatch(changeRequestHostName(request))
    },
    changeNameHolderClass: (className) => {
      dispatch(changeNameHolderClass(className))
    },
    changeSetMarkerRadius: (id, radius) => {
      dispatch(changeSetMarkerRadius(id, radius))
    },
    changeSetupConfigClass: (className) => {
      dispatch(changeSetupConfigClass(className))
    },
    changeSetMarkerCoords: (id, coords) => {
      dispatch(changeSetMarkerCoords(id, coords))
    }
  }
}

const Config = connect(mapStateToProps, mapDispatchToProps)(config)

export default connect(mapStateToProps, mapDispatchToProps)(SetupContainer)
