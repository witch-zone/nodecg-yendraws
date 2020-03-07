import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'

import '../../../assets/icons/instagram.svg'
import '../../../assets/icons/patreon.svg'
import '../../../assets/icons/twitch.svg'
import '../../../assets/icons/twitter.svg'

interface AccountIconProps {
  service: string
  className?: string
}

const AccountIcon: FunctionComponent<AccountIconProps> = ({ service, className }) => (
  <svg className={classnames('c-social-icon', className)}>
    <use xlinkHref={`#${service}`} />
  </svg>
)

export default AccountIcon
