//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'

//COMPONENTS
import Name                           from '../components/setup/Name'
const SetupContainer = () => {
  return(
    <div className="setupcontainer__holder fullheight">
      <Name />
    </div>
  )
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(SetupContainer)
