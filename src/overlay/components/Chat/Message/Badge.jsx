import { getBadgeFromCurrentSets } from 'nodecg-twitchie-graphics'
import classnames from 'classnames'

import { h } from 'preact'

const OLD_BADGE_NAMES = {
  moderator: 'mod',
}

const mapBadgeNameToWeirdOldName = (badge) => (
  OLD_BADGE_NAMES[badge] || badge
)

const Badge = ({
  type,
  className,
}) => {
  const badge = getBadgeFromCurrentSets(mapBadgeNameToWeirdOldName(type))

  if (!badge) {
    return null
  }

  return (
    <img
      src={badge.alpha || badge.image}
      alt={type}
      className={classnames(
        'c-twitch-badge',
        `c-twitch-badge--${type}`,
        className,
      )}
    />
  )
}

export default Badge
