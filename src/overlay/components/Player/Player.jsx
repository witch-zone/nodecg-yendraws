import { h } from 'preact'

import Scene from '../Scene'

const Player = ({
  status,
}) => (
  <Scene className="c-scene--player c-player">
    <div className="c-layer c-player-window">
      <header className="c-player--header">
        {status}
      </header>

      <section>
        &nbsp;
      </section>

      <footer className="c-player--footer">
        social accounts
      </footer>
    </div>
  </Scene>
)

export default Player
