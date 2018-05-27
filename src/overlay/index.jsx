import { h } from 'preact'
import OverlayProvider from 'nodecg-twitchie-graphics/overlay-provider'

const Overlay = () => (
  <OverlayProvider>
    <h1>HELLO!</h1>
    <p>this is the overlay :~)</p>
    <h2>It&apos;s nice to see you!</h2>
    <p>i&apos;m afraid this is all we have right now</p>
  </OverlayProvider>
)

export default Overlay
