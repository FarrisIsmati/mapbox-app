//DEPENDENCIES
import React, { Component }           from 'react'
import PropTypes                      from 'prop-types'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'
import Input1                         from '../common/inputs/Input1'

class Config extends Component {
  constructor(){
    super()

    this.state={ markerRadius: '0' }

    this.setMarker = this.setMarker.bind(this)
    this.setMarkerRadius = this.setMarkerRadius.bind(this)
  }

  //Sets the marker radius in component state so radius can be sent to redux store
  //Without changing the radius in redux store by automatically typing it in
  setMarkerRadius(e) {
    if (!isNaN(e.target.value)) {
      this.setState({markerRadius: e.target.value})
    }
  }

  //Sets the current marker location and radius in the store
  setMarker() {
    if (this.props.ui.setupConfigSetBTNClass === 'button__one button__one__active') {
      this.props.changeSetMarkerRadius(this.state.markerRadius)
      this.props.changeSetMarkerCoords(this.props.game.mapMarkerCoords)
    }
  }

  componentDidMount() {
    //Component needs to mount before triggering animation otherwise animation wont run
    let self = this
    setTimeout(()=>{
      self.props.changeSetupConfigClass("setupconfig__holder setupconfig__holder__active")
    }, 100)
  }

  componentDidUpdate() {
    //Update set marker class pending value
    if (parseInt(this.state.markerRadius) > 0 && this.props.ui.setupConfigSetBTNClass !== 'button__one button__one__active') {
      this.props.changeSetupConfigSetBTNClass('button__one button__one__active')
    }

    if (parseInt(this.state.markerRadius) <= 0 && this.props.ui.setupConfigSetBTNClass !== 'button__one button__one__deactive') {
      this.props.changeSetupConfigSetBTNClass('button__one button__one__deactive')
    }

    if (!this.state.markerRadius && this.props.ui.setupConfigSetBTNClass !== 'button__one button__one__deactive') {
      this.props.changeSetupConfigSetBTNClass('button__one button__one__deactive')
    }
  }

  render(){
    return(
      <div className={this.props.ui.setupConfigClass}>
        <div className="setupconfig">
          <div className="setupconfig__grid setupconfig__grid__start">
            <Input1
              onChange={(e)=>this.setMarkerRadius(e)}
              maxLength="4"
              className="input input__medium"
              value={this.state.markerRadius}
              placeholder='10'
              size="4"
            />
            <h1 id="miles">mi</h1>
            <Button1
              name={"Set"}
              click={()=>{this.setMarker()}}
              className={this.props.ui.setupConfigSetBTNClass}
            />
          </div>
          <div className="setupconfig__grid setupconfig__grid__end">
            <Button1
              name={"Start"}
              click={()=>{console.log('clicked')}}
              className={this.props.ui.setupConfigStartBTNClass}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Config
