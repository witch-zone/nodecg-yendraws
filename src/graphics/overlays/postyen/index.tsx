import { FunctionComponent, h } from 'preact'
import classnames from 'classnames'

import Chat from '../../components/Chat'
import Layer from '../../components/Layer'

import Status from './components/Status'
import Message from './components/Message'
import Postmark from './components/Postmark'
import Notifications from './components/Notifications'

import usePostyenStore from './store'

import './postyen.scss'
import classes from './PostyenOverlay.module.scss'

import stripeTop from './assets/stripe-top.png'
import stripeBottom from './assets/stripe-bottom.png'
import postboxBack from './assets/postbox-back.png'
import postboxFront from './assets/postbox-front.png'

const PostyenOverlay: FunctionComponent = () => {
  const mode = usePostyenStore((state) => state.mode)

  return (
    <Layer
      className={classnames(
        classes.PostyenOverlay,
        classes[`PostyenOverlay--${mode}`],
      )}
    >
      <div className={classes.Envelope}>
        <Layer className={classes.Envelope__Sidebar} />

        <Layer>
          <img src={stripeBottom} />
        </Layer>

        <Status />

        <Layer>
          <img src={postboxBack} />
        </Layer>

        <Layer className={classes.PostyenOverlay__Chat}>
          <Chat messageComponent={Message} startFrom="bottom" />
        </Layer>

        <Layer>
          <img src={postboxFront} />
        </Layer>

        <Layer>
          <img src={stripeTop} />
        </Layer>
      </div>

      <Postmark />

      <Notifications />
    </Layer>
  )
}

export default PostyenOverlay
