//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'
import Input1                         from '../common/inputs/Input1'


const Config = ({game, changeSetMarkerRadius}) => (
  <div className="setupconfig__holder">
    <div className="setupconfig">
      <div className="setupconfig__grid setupconfig__grid__start">
        <Input1
          onChange={changeSetMarkerRadius}
          maxLength="4"
          className="input input__medium"
          numeric={true}
          value={game.setMarkerRadius}
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

export default Config
