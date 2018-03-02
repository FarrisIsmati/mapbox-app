//DEPENDENCIES
import React, { Component }           from 'react'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'
import Input1                         from '../common/inputs/Input1'

class Config extends Component {
  constructor(){
    super()

    this.state={ markerRadius: '0' }

    this.setMarkerRadius = this.setMarkerRadius.bind(this)
  }

  //Sets the marker radius in component state so radius can be sent to redux store
  //Without changing the radius in redux store by automatically typing it in
  setMarkerRadius(e) {
    if (!isNaN(e.target.value)) {
      this.setState({markerRadius: e.target.value})
    }
  }

  //If you didnt start the game redirect
  //This will remove you if you refresh as well (IF you want that functionality back check out the utility helper for host IP address checking and state saving)
  componentDidMount() {
    //Component needs to mount before triggering animation otherwise animation wont run
    let self = this
    setTimeout(()=>{
      self.props.changeSetupConfigClass("setupconfig__holder setupconfig__holder__active")
    }, 100)
  }

  render(){
    return(
      <div className={this.props.ui.setupConfigClass}>
        <div className="setupconfig">
          <div className="setupconfig__grid setupconfig__grid__start">
            <Input1
              onSubmit={e=>this.props.setMarker(e, this.state.markerRadius, this.props.game.mapMarkerCoords)}
              onChange={e=>this.setMarkerRadius(e)}
              maxLength="4"
              className="input input__medium"
              value={this.state.markerRadius}
              placeholder='0'
              size="4"
            />
            <h1 id="miles">km</h1>
            { parseInt(this.state.markerRadius, 10) > 0 ?
              <Button1
                name={"Set"}
                click={e=>this.props.setMarker(e, this.state.markerRadius, this.props.game.mapMarkerCoords)}
                className='button__one button__one__active'
              /> :
            <Button1
              name={"Set"}
              className='button__one button__one__deactive'
            /> }
          </div>

          <div className="setupconfig__grid setupconfig__grid__end">
            { this.props.game.setMarkerCoords[0] || this.props.game.setMarkerCoords[0] == 0 && this.props.game.setMarkerRadius > 0 ?
              <Button1
                name={"Start"}
                click={this.props.startGame}
                className='button__one button__one__active'
              /> :
              <Button1
                name={"Start"}
                className='button__one button__one__deactive'
              />
            }
          </div>

        </div>
      </div>
    )
  }
}

export default Config
