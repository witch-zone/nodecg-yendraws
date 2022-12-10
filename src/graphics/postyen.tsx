import { h, render } from 'preact'

import PostyenOverlay from './overlays/postyen'

import './scss/yendraws.scss'

render(<PostyenOverlay />, document.getElementById('app')!)
