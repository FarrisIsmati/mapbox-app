//DEPENDENCIES
import React                    from 'react'
import ReactDOM                 from 'react-dom'
import registerServiceWorker    from './registerServiceWorker'
import thunkMiddleware          from 'redux-thunk'
import { createLogger }         from 'redux-logger'
import {  createStore,
          applyMiddleware
        }                       from 'redux'

//COMPONENTS
import Root                     from './components/structure/Root'

//REDUX
import rootReducer              from './redux/reducers/rootReducer'

//STYLESHEETS
import                               './style/main.css'

const loggerMiddleware = createLogger()

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

ReactDOM.render(
  <Root store={store}/>
  , document.getElementById('root')
)

registerServiceWorker()
