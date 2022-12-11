import { h } from 'preact'

import useStore from '../../../store'

import Twemoji from '../../../components/Twemoji'

import lemonFriend from '../../../assets/images/postyen/friendzone-shark.png'

const Status = () => {
  const stream = useStore((state) => state.stream)
  const status = useStore((store) => store.status)

  return (
    <div className="c-status">
      <img className="c-status__friend" src={lemonFriend} />

      <div className="c-status__bubble">
        <Twemoji message={status || stream?.title} />
      </div>
    </div>
  )
}

export default Status
