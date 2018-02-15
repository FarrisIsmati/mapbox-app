//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

const Name = ({name, link, click}) => (
  <div className="name__holder">
    <input
      type="text"
      className="input__large"
      placeholder="YOUR NAME"
    ></input>
  </div>
)

Name.propTypes = {

}

Name.defaultProps = {

}

export default Name
