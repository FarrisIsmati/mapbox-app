//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'

//Landing page
const Home = ({
    game,
    player,
    changeGameTitle,
    startGame,
    history,
    setHostType,
    setPlayerIP,
    setGameID,
    setGuesses
  }) => (
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
          click={()=>{startGame(
            game,
            player,
            history,
            setPlayerIP,
            setHostType,
            setGameID,
            setGuesses
          )}}
          className={'button__one button__one__active'}
        >
        </Button1>
    </div>
  </div>
)

Home.propTypes = {
  game: PropTypes.object,
  player: PropTypes.object,
  changeGameTitle: PropTypes.func,
  startGame: PropTypes.func,
  history: PropTypes.object,
  setHostType: PropTypes.func,
  setPlayerIP: PropTypes.func,
  setGameID: PropTypes.func,
  setGuesses: PropTypes.func
}

export default Home
