//DEPENDENCIES
import React, { Component }           from 'react'
import PropTypes                      from 'prop-types'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'
import Input1                         from '../common/inputs/Input1'

class Config extends Component {
  constructor(){
    super()
  }

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
              onChange={this.props.changeSetMarkerRadius}
              maxLength="4"
              className="input input__medium"
              numeric={true}
              value={this.props.game.setMarkerRadius}
              placeholder='10'
              size="4"
            />
            <h1 id="miles">mi</h1>
            <Button1
              name={"Set"}
              click={()=>{console.log('clicked set')}}
            />
          </div>
          <div className="setupconfig__grid setupconfig__grid__end">
            <Button1
              name={"Start"}
              click={()=>{console.log('clicked')}}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Config
