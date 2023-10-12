import { h } from 'preact'

import useStore, { useOverlayStore } from '../../store'

import CountdownTimer from '../../components/CountdownTimer'
import Layer from '../../components/Layer'
import Schedule from '../../components/Schedule'
import Social from '../../components/Social'
import Emoji from '../../components/Emoji/Emoji'

import './brb.scss'

const BRBOverlay = () => {
  const message = useStore((state) => state.brb.message)
  const timer = useOverlayStore((state) => state.timer)

  return (
    <Layer className="o-scene--brb">
      <Layer className="c-brb">
        <div className="c-brb__message c-brb__section">
          <h1 className="c-brb__title">
            <Emoji message={message || "I'll be back soon!"} />
          </h1>

          <CountdownTimer target={timer} />
        </div>

        <div className="c-brb__section c-brb__schedule">
          <Schedule />
        </div>

        <div className="c-brb__section c-brb__social">
          <Social rightAlign />
        </div>
      </Layer>
    </Layer>
  )
}

export default BRBOverlay
