import { h } from 'preact'
import { getCheermoteFromCurrentSets } from 'nodecg-twitchie-graphics'

const Cheer = ({
  name,
  bits,
  type = 'animated',
  background = 'light',
  size = '4',
}) => {
  const {
    color,
    url,
    alt
  } = getCheermoteFromCurrentSets(name, bits, { type, background, size })

  return url
    ? (
      <span className="c-cheer">
        <img
          src={url}
          alt={alt}
          className="c-twitch-emote c-cheer__emote"
        />

        <span
          className="c-cheer__bits"
          style={{ color }}
        >
          {bits}
        </span>
      </span>
    )
    : (
      <span className="c-cheer">
        {alt}
      </span>
    )
}

export default Cheer
