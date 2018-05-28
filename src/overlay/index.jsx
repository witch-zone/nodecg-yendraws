import { h } from 'preact'
import OverlayProvider from 'nodecg-twitchie-graphics/overlay-provider'

import Player from './components/Player'
import BRB from './components/BRB'

const Overlay = () => (
  <OverlayProvider>
    <Player />
    <BRB />
  </OverlayProvider>
)

export default Overlay
