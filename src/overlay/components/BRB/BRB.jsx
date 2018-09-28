import { h } from 'preact'

import Scene from '../Scene'
import CountdownTimer from '../CountdownTimer'

const BRB = ({
  message,
  timer,
}) => (
  <Scene
    className="c-scene--brb c-brb"
    showWhenAway
  >
    <div className="c-layer c-brb__message">
      <h1 className="c-brb__title">
        {message}
      </h1>

      {timer && (
        <CountdownTimer
          target={timer}
        />
      )}
    </div>
  </Scene>
)

export default BRB
