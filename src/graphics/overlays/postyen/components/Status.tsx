import { FunctionComponent, Fragment, h } from 'preact'

import useStore from '../../../store'

import Twemoji from '../../../components/Twemoji'
import { Layer } from '../../../components/Scene'

import lemonFriend from '../../../assets/images/postyen/friendzone-shark.png'
import SpeechBubble from './SpeechBubble'

const Status: FunctionComponent = () => {
  const stream = useStore((state) => state.stream)
  const status = useStore((store) => store.status)

  return (
    <Fragment>
      <Layer>
        <img src={lemonFriend} />
      </Layer>

      <Layer className="c-status">
        <SpeechBubble>
          <Twemoji message={status || stream?.title} />
        </SpeechBubble>
      </Layer>
    </Fragment>
  )
}

export default Status
