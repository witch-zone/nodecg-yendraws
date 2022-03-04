import { Fragment, h } from 'preact'

import './xsplit-api'

import BRB from './components/BRB'
import Player from './components/Player'

const Overlay = () => (
  <Fragment>
    <Player />
    <BRB />
  </Fragment>
)

export default Overlay
