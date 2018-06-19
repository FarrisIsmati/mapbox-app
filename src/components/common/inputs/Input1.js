//DEPENDENCIES
import React, { Component }           from 'react'
import PropTypes                      from 'prop-types'

//Input only on even number of inputs
class Input1 extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    if (this.props.setTarget){
      console.log(this.input);
      this.props.setTarget(this.input)
    }
  }

  render(){
    return(
      <form className={this.props.classNameForm} onSubmit={ e => {this.props.onSubmit(e,this.input)} }>
          <input
            ref={el=> {this.input = el}}
            type={this.props.type}
            className={this.props.className}
            maxLength={this.props.maxLength}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            value={this.props.value}
            size={this.props.size}
          ></input>
      </form>
    )
  }
}

Input1.propTypes = {
  type: PropTypes.string,
  classNameForm: PropTypes.string,
  className: PropTypes.string,
  setTarget: PropTypes.func,
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
