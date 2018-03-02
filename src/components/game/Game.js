//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

//COMPONENTS
import Input1                         from '../common/inputs/Input1'
import Button1                        from '../common/buttons/Button1'

//Landing page
const Game = ({
    ui,
    player,
    changePlayerName,
    onSubmitName,
    children
  }) => (
    <div className="setupcontainer__holder">
      { ui.requestHostName ?
        <div className={ui.nameHolderClass}>
        {console.log(children)}
          <Input1
            onSubmit={(e, input)=> onSubmitName(
              e,
              input
            )}
            className={"input"}
            maxLength={"14"}
            placeholder={"YOUR NAME"}
            onChange={e => changePlayerName(e.target.value.toUpperCase())}
            value={player.name}
          />
        </div> :
        children
      }
    </div>
)

Game.propTypes = {
  ui: PropTypes.object,
  player: PropTypes.object,
  changePlayerName: PropTypes.func,
  onSubmitName: PropTypes.func,
  children: PropTypes.node
}

export default Game
