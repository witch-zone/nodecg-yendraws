import { h } from 'preact'

import Chat from '../../../components/Chat'
import Notifications from '../../../components/Notifications'
import Scene, { Layer } from '../../../components/Scene'

import Status from '../components/Status'
import Message from '../components/Message'
import Notification from '../components/Notification'

const Player = () => (
  <Scene className="c-player">
    <Layer className="c-layer c-envelope" />

    <Layer className="c-player">
      <Status />
    </Layer>

    <Layer>
      <Chat messageComponent={Message} />
    </Layer>

    <Notifications notificationComponent={Notification} />
  </Scene>
)

export default Player
