import { h, render } from 'preact'

import PostyenOverlay from './overlays/postyen'

import './scss/postyen.scss'

render(<PostyenOverlay />, document.getElementById('app')!)
