import classnames from 'classnames'
import { h } from 'preact'

import zeroMonthsBadge from '../../../../assets/badges/subscriber/0.png'
import threeMonthsBadge from '../../../../assets/badges/subscriber/3.png'
import sixMonthsBadge from '../../../../assets/badges/subscriber/6.png'
import twelveMonthsBadge from '../../../../assets/badges/subscriber/12.png'

const getSubBadgeImage = (duration) => {
  const months = parseInt(duration, 10)

  if (months >= 12) {
    return twelveMonthsBadge
  }

  if (months >= 6) {
    return sixMonthsBadge
  }

  if (months >= 3) {
    return threeMonthsBadge
  }

  return zeroMonthsBadge
}

const SubscriberBadge = ({
  duration,
  className,
}) => (
  <img
    src={getSubBadgeImage(duration)}
    alt={`Subscriber for ${duration} months!`}
    className={classnames(
      'c-twitch-badge',
      'c-twitch-badge--sub',
      className
    )}
  />
)

export default SubscriberBadge
