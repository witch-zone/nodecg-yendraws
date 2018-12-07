import { h } from 'preact'
import classnames from 'classnames'

import AccountIcon from './AccountIcon'

const Account = ({
  service,
  username,
  className,
}) => (
  <div
    className={classnames(
      'c-social-link',
      className,
    )}
  >
    <AccountIcon
      className="c-social-link__icon"
      service={service}
    />

    <span className="c-social-link__username">
      {username}
    </span>
  </div>
)

export default Account
