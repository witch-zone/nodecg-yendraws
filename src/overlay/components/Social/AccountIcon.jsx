import { h } from 'preact'
import classnames from 'classnames'

import '../../../assets/icons/twitch.svg'
import '../../../assets/icons/twitter.svg'
import '../../../assets/icons/patreon.svg'
import '../../../assets/icons/instagram.svg'

const AccountIcon = ({
  service,
  className,
}) => (
  <svg
    className={classnames(
      'c-social-icon',
      className,
    )}
  >
    <use xlinkHref={`#${service}`} />
  </svg>
)

export default AccountIcon
