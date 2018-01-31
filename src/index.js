//DEPENDENCIES
import React                    from 'react'
import ReactDOM                 from 'react-dom'
import registerServiceWorker    from './registerServiceWorker'
import thunkMiddleware          from 'redux-thunk'
import { createLogger }         from 'redux-logger'
import {
        createStore,
        applyMiddleware
      }                         from 'redux'

//COMPONENTS
import App                      from './components/structure/App'

//REDUX
import rootReducer              from './redux/reducers/rootReducer'

//STYLESHEETS
import                               './style/main.css'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

store.subscribe(()=>{
  console.log(store.getState())
})

ReactDOM.render(
  <App store={store}/>
  , document.getElementById('root')
)

registerServiceWorker()
