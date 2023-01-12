import { FunctionComponent, h } from 'preact'

import useStore from '../../../store'
import usePostyenStore from '../store'

import Twemoji from '../../../components/Twemoji'
import { Layer } from '../../../components/Scene'

import lemonFriend from '../../../assets/images/postyen/friends/friend-lemon.png'
import eelFriend from '../../../assets/images/postyen/friends/friend-eel.png'
import jellyFriend from '../../../assets/images/postyen/friends/friend-jelly.png'

import SpeechBubble from './SpeechBubble'

const Status: FunctionComponent = () => {
  const stream = useStore((state) => state.stream)
  const status = useStore((store) => store.status)
  const mode = usePostyenStore((state) => state.mode)

  return (
    <Layer className={`c-status c-status--${mode}`}>
      <div className="c-status__friends">
        <img
          className="c-status__friend c-status__friend--digital"
          src={lemonFriend}
        />
        <img
          className="c-status__friend c-status__friend--traditional"
          src={eelFriend}
        />
        <img
          className="c-status__friend c-status__friend--games"
          src={jellyFriend}
        />
      </div>

      <div className="c-status__message">
        <SpeechBubble>
          <Twemoji message={status || stream?.title} />
        </SpeechBubble>
      </div>
    </Layer>
  )
}

export default Status
