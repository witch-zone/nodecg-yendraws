import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'

import AccountIcon from './AccountIcon'

interface AccountProps {
  service: string
  link: string
  className?: string
}

const Account: FunctionComponent<AccountProps> = ({ service, link, className }) => (
  <div className={classnames('c-social-link', className)}>
    <AccountIcon className="c-social-link__icon" service={service} />
    <span className="c-social-link__url">{link}</span>
  </div>
)

export default Account
