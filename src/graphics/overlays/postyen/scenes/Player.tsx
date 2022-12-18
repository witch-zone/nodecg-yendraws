import { h } from 'preact'

import Chat from '../../../components/Chat'
import Notifications from '../../../components/Notifications'
import Scene, { Layer } from '../../../components/Scene'

import Status from '../components/Status'
import Message from '../components/Message'
import Notification from '../components/Notification'
import Postmark from '../components/Postmark'

import stripeTop from '../../../assets/images/postyen/stripe-top.png'
import stripeBottom from '../../../assets/images/postyen/stripe-bottom.png'
import postboxBack from '../../../assets/images/postyen/postbox-back.png'
import postboxFront from '../../../assets/images/postyen/postbox-front.png'

const Player = () => (
  <Scene className="c-player">
    <div className="c-envelope">
      <Layer className="c-envelope__sidebar" />

      <Layer>
        <img src={stripeBottom} />
      </Layer>

      <Layer>
        <Status />
      </Layer>

      <Layer>
        <img src={postboxBack} />
      </Layer>

      <Layer>
        <Chat messageComponent={Message} />
      </Layer>

      <Layer>
        <img src={postboxFront} />
      </Layer>

      <Layer>
        <img src={stripeTop} />
      </Layer>
    </div>

    <Postmark />

    <Notifications notificationComponent={Notification} />
  </Scene>
)

export default Player
