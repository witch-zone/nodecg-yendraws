import { h } from 'preact'
import { useSelector } from 'react-redux'

import { getMessage, getTimer } from 'nodecg-twitchie-graphics'

import CountdownTimer from './CountdownTimer'
import Scene, { Layer } from './Scene'
import Schedule from './Schedule'
import Social from './Social'
import Twemoji from './Twemoji'

const BRB = () => {
  const message = useSelector(getMessage)
  const timer = useSelector(getTimer)

  return (
    <Scene className="o-scene--brb" showWhenAway>
      <Layer className="c-brb">
        <figure className="c-brb__yen" />

        <div className="c-brb__wrapper">
          <div className="c-brb__message c-brb__section">
            <h1 className="c-brb__title">
              <Twemoji message={message} />
            </h1>

            <CountdownTimer className="c-brb__countdown" target={timer} />
          </div>

          <Schedule className="c-brb__schedule c-brb__section" />

          <div className="c-brb__social">
            <Social rightAlign />
          </div>
        </div>
      </Layer>
    </Scene>
  )
}

export default BRB
