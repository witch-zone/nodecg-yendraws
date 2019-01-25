import { h } from 'preact'

import Scene, { Layer } from '../Scene'
import Social from '../Social'
import Chat from '../Chat'
import Twemoji from '../Twemoji'

const Player = ({
  status,
}) => (
  <Scene className="o-scene--player">
    <Layer className="c-layer c-player-background" />

    <Layer className="c-player">
      <header className="c-player__header">
        <Twemoji>
          {status}
        </Twemoji>
      </header>

      <footer className="c-player__footer">
        <Social />
      </footer>
    </Layer>

    <Layer className="c-chat">
      <Chat />
    </Layer>
  </Scene>
)

export default Player
