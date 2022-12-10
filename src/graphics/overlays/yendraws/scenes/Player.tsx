import { h } from 'preact'

import useStore from '../../../store'

import Chat from '../../../components/Chat'
import Notifications from '../../../components/Notifications'
import Scene, { Layer } from '../../../components/Scene'
import Social from '../../../components/Social'
import Twemoji from '../../../components/Twemoji'

import Message from '../components/Message'
import Notification from '../components/Notification'

const Player = () => {
  const stream = useStore((state) => state.stream)

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
        <Chat messageComponent={Message} />
      </Layer>

      <Notifications notificationComponent={Notification} />
    </Scene>
  )
}

export default Player
