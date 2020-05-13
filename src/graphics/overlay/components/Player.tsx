import { getStreamInfo } from 'nodecg-twitchie-graphics'
import { h } from 'preact'
import { useSelector } from 'react-redux'

import Chat from './Chat'
import Notifications from './Notifications'
import Scene, { Layer } from './Scene'
import Social from './Social'
import Twemoji from './Twemoji'

const Player = () => {
  const stream = useSelector(getStreamInfo)

  return (
    <Scene className="o-scene--player">
      <Layer className="c-layer c-player-background" />

      <Layer className="c-player">
        <header className="c-player__header">
          <Twemoji message={stream?.title} />
        </header>

        <footer className="c-player__footer">
          <Social />
        </footer>
      </Layer>

      <Layer>
        <Chat />
      </Layer>

      <Notifications />
    </Scene>
  )
}

export default Player
