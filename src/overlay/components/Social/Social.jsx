import { h } from 'preact'
import classnames from 'classnames'

import Account from './Account'

const Social = ({
  accounts,
  active,
  className,
}) => (
  <div
    className={classnames(
      'c-social-links',
      className,
    )}
  >
    {accounts.map(
      ({ service, username }, idx) => (
        <Account
          className={classnames(
            'c-social-links__service',
            {
              'c-social-links__service--active': active === idx,
            }
          )}
          service={service}
          link={username}
        />
      )
    )}

    {' '}
  </div>
)

export default Social
