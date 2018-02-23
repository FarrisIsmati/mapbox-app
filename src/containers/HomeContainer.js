//DEPENDENCIES
import React                          from 'react'
import { connect }                    from 'react-redux'

//COMPONENTS
import home                           from '../components/home/Home'

//REDUX
import { changeGameTitle }            from '../redux/actions/gameActions'

const HomeContainer = () => {
  return(
    <Home />
  )
}

const mapStateToProps = (state) => ({...state})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeGameTitle: (title) => {
      dispatch(changeGameTitle(title))
    }
  }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(home)

export default HomeContainer
