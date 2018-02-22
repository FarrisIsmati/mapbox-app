//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'


const Config = ({}) => (
  <div className="setupconfig__holder">
    <div className="setupconfig">
      <div className="setupconfig__grid"></div>
      <div className="setupconfig__grid setupconfig__grid__center">
        <div className="setupconfig__spacer"></div>
        <div>Radius</div>
        <div>Set</div>
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
