import { h } from 'preact'
import OverlayProvider from './overlay-provider'

import BRB from './components/BRB'
import Player from './components/Player'

import bindDispatch from './api'
import { reducers } from './store'

import magic from '../assets/sounds/magic-notification.flac'

const Overlay = () => (
  <OverlayProvider reducers={reducers as any} callback={bindDispatch}>
    <audio preload="preload" src={magic} />

    <Player />
    <BRB />
  </OverlayProvider>
)

export default Overlay
