import { h } from 'preact'

import Scene from '../Scene'
import Social from '../Social'

const Player = ({
  status,
}) => (
  <Scene className="c-scene--player">
    <figure className="c-layer c-player-background" />

    <div className="c-layer c-player">
      <header className="c-player__header">
        {status}
      </header>

      <section>
        &nbsp;
      </section>

      <footer className="c-player__footer">
        <Social />
      </footer>
    </div>

    <div className="c-layer c-chat">
      chat go here :-)
    </div>
  </Scene>
)

export default Player
