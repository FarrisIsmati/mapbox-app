//DEPENDENCIES
import React                          from 'react'
import { Provider }                   from 'react-redux'

//COMPONENTS
import NewContainer                   from '../../containers/NewContainer'

const App = ({ store }) => (
  <Provider store={store}>
    <div className="app__holder">
      <NewContainer />
    </div>
  </Provider>
)

export default App
