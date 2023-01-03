import { h, render } from 'preact'

import BRBOverlay from './overlays/brb'

import './scss/brb.scss'

render(<BRBOverlay />, document.getElementById('app')!)
