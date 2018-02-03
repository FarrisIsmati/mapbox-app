//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

//If the button is a link provide a link, you can also provide a function
const Button1 = ({name, link, click}) => (
  <div>
    {
      link ?
        <a href={link}>
          <h1 className="button__one noselect" onClick={click} value={name}>{name}</h1>
        </a> :
        <h1 className="button__one noselect" onClick={click} value={name}>{name}</h1>
    }
  </div>
)

Button1.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  click: PropTypes.func
}

Button1.defaultProps = {
  name: 'button',
  link: null,
  click: null
}

export default Button1
