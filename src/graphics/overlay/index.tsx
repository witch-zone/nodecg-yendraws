import { Fragment, h } from 'preact'

import './xsplit-api'

import BRB from './components/BRB'
import Player from './components/Player'

import magic from '../assets/sounds/magic-notification.flac'

const Overlay = () => (
  <Fragment>
    <audio preload="preload" src={magic} />

    <Player />
    <BRB />
  </Fragment>
)

export default Overlay
