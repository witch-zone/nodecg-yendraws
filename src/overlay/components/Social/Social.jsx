import { h } from 'preact'
import classnames from 'classnames'

import Account from './Account'

const Social = ({
  accounts,
  className,
}) => (
  <div
    className={classnames(
      'c-social-links',
      className,
    )}
  >
    {accounts.map(
      ({ service, username }) => (
        <Account
          className="c-social-links__link"
          service={service}
          username={username}
        />
      )
    )}
  </div>
)

export default Social
