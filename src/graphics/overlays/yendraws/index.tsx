import { Fragment, h } from 'preact'

import BRB from './scenes/BRB'
import Player from './scenes/Player'

const YendrawsOverlay = () => (
  <Fragment>
    <Player />
    <BRB />
  </Fragment>
)

export default YendrawsOverlay
