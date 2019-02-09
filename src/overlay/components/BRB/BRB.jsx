import { h } from 'preact'

import Scene, { Layer } from '../Scene'
import CountdownTimer from '../CountdownTimer'
import Social from '../Social'
import Schedule from '../Schedule'

const BRB = ({
  message,
  timer,
}) => (
  <Scene
    className="o-scene--brb"
    showWhenAway
  >
    <Layer className="c-brb">
      <figure className="c-brb__yen" />

      <div className="c-brb__wrapper">
        <div className="c-brb__message c-brb__section">
          <h1 className="c-brb__title">
            {message}
          </h1>

          <CountdownTimer
            className="c-brb__countdown"
            target={timer}
          />
        </div>

        <div className="c-brb__schedule c-brb__section">
          <Schedule />
        </div>

        <div className="c-brb__social">
          <Social rightAlign />
        </div>
      </div>
    </Layer>
  </Scene>
)

export default BRB
