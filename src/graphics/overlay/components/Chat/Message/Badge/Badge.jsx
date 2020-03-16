import classnames from 'classnames'
import { h } from 'preact'

import broadcaster from '../../../../../assets/badges/yen.png'
import moderator from '../../../../../assets/badges/mod.png'

import SubscriberBadge from './SubscriberBadge'

const Badge = ({
  badges,
  className,
}) => {
  if (badges.broadcaster) {
    return (
      <img
        src={broadcaster}
        alt="it's yen!!"
        className={classnames(
          'c-twitch-badge',
          'c-twitch-badge--broadcaster',
          className,
        )}
      />
    )
  } else if (badges.moderator) {
    return (
      <img
        src={moderator}
        alt="it's a mod!!"
        className={classnames(
          'c-twitch-badge',
          'c-twitch-badge--moderator',
          className,
        )}
      />
    )
  } else if (badges.subscriber) {
    return (
      <SubscriberBadge
        duration={badges.subscriber}
        className={className}
      />
    )
  }

  return null
}

export default Badge
