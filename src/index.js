//DEPENDENCIES
import React                    from 'react'
import ReactDOM                 from 'react-dom'
import registerServiceWorker    from './registerServiceWorker'

//COMPONENTS
import App                      from './components/structure/App'

//STYLESHEETS
import                               './style/main.css'

ReactDOM.render(
  <App />
  , document.getElementById('root')
)

registerServiceWorker()
