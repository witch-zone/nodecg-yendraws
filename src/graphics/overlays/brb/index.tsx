import { h } from 'preact'

import useStore, { useOverlayStore } from '../../store'

import CountdownTimer from '../../components/CountdownTimer'
import Scene, { Layer } from '../../components/Scene'
import Schedule from '../../components/Schedule'
import Social from '../../components/Social'
import Twemoji from '../../components/Twemoji'

const BRBOverlay = () => {
  const message = useStore((state) => state.brb.message)
  const timer = useOverlayStore((state) => state.timer)

  return (
    <Scene className="o-scene--brb">
      <Layer className="c-brb">
        <div className="c-brb__message c-brb__section">
          <h1 className="c-brb__title">
            <Twemoji message={message || "I'll be back soon!"} />
          </h1>

          <CountdownTimer className="c-brb__countdown" target={timer} />
        </div>

        <div className="c-brb__section">
          <Schedule className="c-brb__schedule" />
        </div>

        <div className="c-brb__section">
          <Social rightAlign />
        </div>
      </Layer>
    </Scene>
  )
}

export default BRBOverlay
