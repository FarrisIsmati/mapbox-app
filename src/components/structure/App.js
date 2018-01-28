//DEPENDENCIES
import React, { Component }           from 'react'

//COMPONENTS
import NewGame                        from '../new/NewGame'

class App extends Component {
  render() {
    return (
      <div className="app__holder">
        <NewGame />
      </div>
    )
  }
}

export default App
