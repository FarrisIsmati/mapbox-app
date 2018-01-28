//DEPENDENCIES
import React                    from 'react'
import ReactDOM                 from 'react-dom'
import registerServiceWorker    from './registerServiceWorker'

//COMPONENTS
import App                      from './App'

//STYLESHEETS
import                               './index.css'

ReactDOM.render(
  <App />
  , document.getElementById('root')
)

registerServiceWorker()
