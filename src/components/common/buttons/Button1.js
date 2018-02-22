//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

//If the button is a link provide a link, you can also provide a function
const Button1 = ({name, link, click, className}) => (
  <div>
    {
      link ?
        <a href={link}>
          <h1 className={className} onClick={click} value={name}>{name}</h1>
        </a> :
        <h1 className={className} onClick={click} value={name}>{name}</h1>
    }
  </div>
)

Button1.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  click: PropTypes.func,
  className: PropTypes.string
}

Button1.defaultProps = {
  name: 'button',
  link: null,
  click: null,
  className: 'button__one button__one__active'
}

export default Button1
