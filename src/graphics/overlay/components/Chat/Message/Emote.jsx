import { getEmote } from 'nodecg-twitchie-graphics'

import { h } from 'preact'

const Emote = ({
  name,
  title,
  size = '3.0',
}) => (
  <img
    src={getEmote(name, { size })}
    alt={title}
    className="c-twitch-emote"
  />
)

export default Emote
