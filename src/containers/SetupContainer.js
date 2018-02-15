//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'

const SetupContainer = () => {
  return(
    <div>hi</div>
  )
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(SetupContainer)
