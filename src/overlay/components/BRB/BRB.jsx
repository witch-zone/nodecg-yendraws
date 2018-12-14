import { h } from 'preact'

import Scene, { Layer } from '../Scene'
import CountdownTimer from '../CountdownTimer'

const BRB = ({
  message,
  timer,
}) => (
  <Scene
    className="o-scene--brb"
    showWhenAway
  >
    <Layer className="c-brb">
      <div className="c-brb__message">
        <h1 className="c-brb__title">
          {message}
        </h1>

        <CountdownTimer
          target={timer}
        />
      </div>
    </Layer>
  </Scene>
)

export default BRB
