import { h } from 'preact'

import useStore from '../../store'

import Chat from '../../components/Chat'
import Notifications from '../../components/Notifications'
import Layer from '../../components/Layer'
import Social from '../../components/Social'
import Emoji from '../../components/Emoji/Emoji'

import Message from './components/Message'
import Notification from './components/Notification'

import './yendraws.scss'

const YendrawsOverlay = () => {
  const stream = useStore((state) => state.stream)
  const status = useStore((store) => store.status)

  return (
    <Layer className="o-scene--player">
      <Layer className="c-layer c-player-background" />

      <Layer className="c-player">
        <header className="c-player__header">
          <Emoji message={status || stream?.title} />
        </header>

        <footer className="c-player__footer">
          <Social />
        </footer>
      </Layer>

      <Layer>
        <Chat messageComponent={Message} />
      </Layer>

      <Notifications notificationComponent={Notification} />
    </Layer>
  )
}

export default YendrawsOverlay
