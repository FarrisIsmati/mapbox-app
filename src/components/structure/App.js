//DEPENDENCIES
import React                          from 'react'

import { Route,
         Switch,
         withRouter
       }                              from 'react-router-dom'

//COMPONENTS
import HomeContainer                  from '../../containers/HomeContainer'
import GameContainer                  from '../../containers/GameContainer'

//Add a 404 Route page and a Help Guide Page
const App = () => (
  <div className="app__holder">
    <Switch>
      <Route exact path="/" component={ HomeContainer } />
      <Route path="/game" component={ GameContainer } />
      <Route path="/*" component={ HomeContainer } />
    </Switch>
  </div>
)

export default withRouter(App)
