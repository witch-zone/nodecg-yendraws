import { getBadgeFromCurrentSets } from 'nodecg-twitchie-graphics'
import classnames from 'classnames'

import { h } from 'preact'

const Badge = ({
  type,
  className,
}) => (
  <img
    src={getBadgeFromCurrentSets(type)}
    alt={type}
    className={classnames(
      'c-twitch-badge',
      `c-twitch-badge--${type}`,
      className,
    )}
  />
)

export default Badge
