//DEPENDENCIES
import React                          from 'react'

//COMPONENTS
import MapBackground                  from '../mapbox/MapBackground'
import Button1                        from '../common/buttons/Button1'

//Landing page
const Home = ({game, player, changeGameTitle, startGame}) => (
  <div className="home__holder">
    <div className="home__overlay">
      <div className="home__grid">
        <div className="text__holder">
          <input
            ref={el => this.input = el}
            type="text"
            className="input"
            onChange={e=>{changeGameTitle(e.target.value.toUpperCase())}}
            maxLength="8"
            value={game.title}
          ></input>
        <h1 className="noselect">WHERE IS IT?</h1>
        </div>
          <Button1
            name={'START'}
            click={()=>startGame(game,player)}
            className={'button__one button__one__active'}
          >
          </Button1>
      </div>
    </div>

    <MapBackground />
  </div>
)

export default Home
