import classnames from 'classnames'

import { h } from 'preact'

const SubscriberBadge = ({
  type,
  scale,
  className,
}) => (
  <span>subscriber for {scale} time</span>
)

export default SubscriberBadge
