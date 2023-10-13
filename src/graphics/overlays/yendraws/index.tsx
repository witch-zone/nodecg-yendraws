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
import classes from './YendrawsOverlay.module.scss'

const YendrawsOverlay = () => {
  const stream = useStore((state) => state.stream)
  const status = useStore((store) => store.status)

  return (
    <Layer className={classes.YendrawsOverlay}>
      <Layer className={classes.Background} />

      <Layer className={classes.Player}>
        <header className={classes.Player__Header}>
          <Emoji message={status || stream?.title} />
        </header>

        <footer className={classes.Player__Footer}>
          <Social />
        </footer>
      </Layer>

      <Layer className={classes.YendrawsOverlay__Chat}>
        <Chat messageComponent={Message} />
      </Layer>

      <Notifications notificationComponent={Notification} />
    </Layer>
  )
}

export default YendrawsOverlay
