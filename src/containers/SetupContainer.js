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
          changeSetMarkerRadius,
          changeSetMarkerCoords
        }                             from '../redux/actions/gameActions'

//Convert to Class on component Did Mount Upload Data From Backend


class SetupContainer extends Component {
  constructor(){
    super()

    this.onSubmitName = this.onSubmitName.bind(this)
  }

  //Upon submitting name animate fade away and disable text area
  //requestHostName set to false in store
  //Set player to host
  onSubmitName(e, input) {
    e.preventDefault()
    let self = this
    input.disabled = true
    this.props.setHostType(true)
    this.props.changeNameHolderClass('name__holder name__holder__deactive')
    setTimeout(()=>{
      self.props.changeRequestHostName(false)
    }, 1600)
  }

  //Redirect if the host IP is not the same as the game host's IP
  componentDidMount() {
    axios.get('http://localhost:3001' + this.props.history.location.pathname)
      .then((res)=>{
        return axios.get('https://freegeoip.net/json/')
                .then((resIP)=>{
                  if (resIP.data.ip !== res.data.host.ip) {
                    console.log('IP Addresses do not match!')
                    //this.props.history.push('/')
                  }
                })
                .catch((err)=>{
                  console.log(err)
                })
      })
      .catch((err)=>{
        console.log(err)
      })
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
          <Config />
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => ({...state})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
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
    changeSetMarkerRadius: (radius) => {
      dispatch(changeSetMarkerRadius(radius))
    },
    changeSetupConfigClass: (className) => {
      dispatch(changeSetupConfigClass(className))
    },
    changeSetMarkerCoords: (coords) => {
      dispatch(changeSetMarkerCoords(coords))
    }
  }
}

const Config = connect(mapStateToProps, mapDispatchToProps)(config)

export default connect(mapStateToProps, mapDispatchToProps)(SetupContainer)
