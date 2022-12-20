import { FunctionComponent, h } from 'preact'

import useStore from '../../../store'

import Twemoji from '../../../components/Twemoji'
import { Layer } from '../../../components/Scene'

import lemonFriend from '../../../assets/images/postyen/friends/lemon.png'
import SpeechBubble from './SpeechBubble'

const Status: FunctionComponent = () => {
  const stream = useStore((state) => state.stream)
  const status = useStore((store) => store.status)

  return (
    <Layer className="c-status">
      <img className="c-status__friend" src={lemonFriend} />

      <div className="c-status__message">
        <SpeechBubble>
          <Twemoji message={status || stream?.title} />
        </SpeechBubble>
      </div>
    </Layer>
  )
}

export default Status
