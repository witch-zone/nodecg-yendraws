import { h } from 'preact'

import Chat from './Chat'
import Notifications from './Notifications'
import Scene, { Layer } from './Scene'
import Social from './Social'
import Twemoji from './Twemoji'

const Player = () => {
  //   const { status } = useSelector(getChannelInfo)

  return (
    <Scene className="o-scene--player">
      <Layer className="c-layer c-player-background" />

      <Layer className="c-player">
        <header className="c-player__header">
          <Twemoji>{status}</Twemoji>
        </header>

        <footer className="c-player__footer">
          <Social />
        </footer>
      </Layer>

      <Layer className="c-chat">
        <Chat />
      </Layer>

      <Notifications />
    </Scene>
  )
}

export default Player
