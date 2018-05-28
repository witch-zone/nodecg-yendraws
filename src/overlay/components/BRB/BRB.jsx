import { h } from 'preact'

import Scene from '../Scene'

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
        <p className="c-brb__timer">
          Starting in {timer.getHours()}:{timer.getMinutes()}!
        </p>
      )}
    </div>
  </Scene>
)

export default BRB
