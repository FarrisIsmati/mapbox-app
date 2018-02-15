//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

const Name = ({}) => (
  <div className="name__holder">
    <input
      type="text"
      className="input__large"
      maxLength="14"
      placeholder="YOUR NAME"
    ></input>
  </div>
)

Name.propTypes = {

}

Name.defaultProps = {

}

export default Name
