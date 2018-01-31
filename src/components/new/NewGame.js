//DEPENDENCIES
import React, { Component }           from 'react'

//COMPONENTS
import MapBackground                            from '../mapbox/MapBackground'

//Landing page
class NewGame extends Component {
  constructor(props){
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
  }

  onChangeInput(e) {
    this.props.changeGameTitle(e.target.value.toUpperCase())
  }

  componentDidMount() {
    this.input.focus()
    let selectionStart = this.input.value.length * 2
    this.input.setSelectionRange(selectionStart, selectionStart)
  }

  render() {
    return (
      <div className="newgame__holder">

        <div className="newgame__overlay">
          <div className="text__holder">
            <input
              ref={el => this.input = el}
              type="text"
              className="input__titlescreen"
              onChange={e=>{this.onChangeInput(e)}}
              maxLength="7"
              value={this.props.game.title}
            ></input>
            <h1>WHERE IS IT?</h1>
          </div>
        </div>

        <MapBackground />
      </div>
    )
  }
}

export default NewGame
