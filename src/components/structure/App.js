//DEPENDENCIES
import React                          from 'react'
import { Provider }                   from 'react-redux'
import { BrowserRouter as Router,
         Route,
         Switch
       }                              from 'react-router-dom'

//COMPONENTS
import HomeContainer                  from '../../containers/HomeContainer'
import GameContainer                  from '../../containers/GameContainer'

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="app__holder">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/game" component={GameContainer} />
          //Add a 404 page
          <Route path="/*" component={HomeContainer} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default App
