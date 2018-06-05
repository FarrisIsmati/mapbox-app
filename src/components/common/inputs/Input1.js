//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

const Input1 = ({type, className, classNameForm, maxLength, placeholder, onSubmit, onChange, value, size}) => (
  <form className={classNameForm} onSubmit={ e => {onSubmit(e,this.input)} }>
      <input
        ref={el=> {this.input = el}}
        type={type}
        className={className}
        maxLength={maxLength}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        size={size}
      ></input>
  </form>
)

Input1.propTypes = {
  type: PropTypes.string,
  classNameForm: PropTypes.string,
  className: PropTypes.string,
  maxLength: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  size: PropTypes.string
}

Input1.defaultProps = {
  type: 'text',
  className: 'input'
}

export default Input1
