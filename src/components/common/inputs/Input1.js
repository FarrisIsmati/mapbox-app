//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

const checkValue = (e, onChange) => {
  if (!isNaN(e.target.value)) {
    onChange(e.target.value)
  }
}

const Input1 = ({type, className, maxLength, placeholder, onSubmit, onChange, numeric, value, size}) => (
  <form onSubmit={ e => {onSubmit(e,this.input)} }>
    { numeric ?
      <input
        ref={el=> {this.input = el}}
        type={type}
        className={className}
        maxLength={maxLength}
        onChange={(e)=>{checkValue(e, onChange)}}
        placeholder={placeholder}
        value={value}
        size={size}
      ></input> :
      <input
        ref={el=> {this.input = el}}
        type={type}
        className={className}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        size={size}
      ></input>
    }
  </form>
)

Input1.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  maxLength: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  numeric: PropTypes.bool,
  value: PropTypes.string,
  size: PropTypes.string
}

Input1.defaultProps = {
  type: 'text',
  className: 'input',
  numeric: false
}

export default Input1
