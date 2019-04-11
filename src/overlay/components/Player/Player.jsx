import { h } from 'preact'
import { Notifications } from 'nodecg-twitchie-graphics/overlay-provider'

import Notification from '../Notification'
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

    <Notifications duration="20000">
      {
        ({ notification, visible }) => (
          <Notification
            notification={notification}
            visible={visible}
          />
        )
      }
    </Notifications>
  </Scene>
)

export default Player
