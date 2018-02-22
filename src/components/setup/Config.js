//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'
import Input1                         from '../common/inputs/Input1'


const Config = ({changeSetMarkerRadius}) => (
  <div className="setupconfig__holder">
    <div className="setupconfig">
      <div className="setupconfig__grid"></div>
      <div className="setupconfig__grid setupconfig__grid__center">
        <div className="setupconfig__spacer"></div>
        <Input1
          onChange={changeSetMarkerRadius}
          className="input input__medium"
          numeric={true}
        />
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

export default Config
