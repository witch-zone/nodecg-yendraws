import { h } from 'preact'
import OverlayProvider from 'nodecg-twitchie-graphics/overlay-provider'

import Player from './components/Player'
import BRB from './components/BRB'

import { reducers } from './store'
import bindDispatch from './api'

const Overlay = () => (
  <OverlayProvider
    reducers={reducers}
    callback={bindDispatch}
  >
    <Player />
    <BRB />
  </OverlayProvider>
)

export default Overlay
