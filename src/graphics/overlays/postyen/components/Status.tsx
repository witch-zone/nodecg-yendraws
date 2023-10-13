import { FunctionComponent, h } from 'preact'
import classnames from 'classnames'

import useStore from '../../../store'
import usePostyenStore from '../store'

import Emoji from '../../../components/Emoji/Emoji'
import Layer from '../../../components/Layer'

import SpeechBubble from './SpeechBubble'

import lemonFriend from '../assets/friends/friend-lemon.png'
import eelFriend from '../assets/friends/friend-eel.png'
import jellyFriend from '../assets/friends/friend-jelly.png'

import classes from './Status.module.scss'

const Status: FunctionComponent = () => {
  const stream = useStore((state) => state.stream)
  const status = useStore((store) => store.status)
  const mode = usePostyenStore((state) => state.mode)

  return (
    <Layer className={classes.Status}>
      <div className={classes.Status__Friends}>
        <img
          className={classnames(classes.Status__Friend, {
            [classes['Status__Friend--visible']]: mode === 'digital',
          })}
          src={lemonFriend}
        />

        <img
          className={classnames(classes.Status__Friend, {
            [classes['Status__Friend--visible']]: mode === 'traditional',
          })}
          src={eelFriend}
        />

        <img
          className={classnames(classes.Status__Friend, {
            [classes['Status__Friend--visible']]: mode === 'games',
          })}
          src={jellyFriend}
        />
      </div>

      <div className={classes.Status__Message}>
        <SpeechBubble>
          <Emoji message={status || stream?.title} />
        </SpeechBubble>
      </div>
    </Layer>
  )
}

export default Status
