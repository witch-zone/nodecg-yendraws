import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'

import classes from './Social.module.scss'

import '../../assets/icons/instagram.svg'
import '../../assets/icons/patreon.svg'
import '../../assets/icons/twitch.svg'
import '../../assets/icons/twitter.svg'

interface AccountProps {
  service: string
  link: string
  className?: string
}

const SocialAccount: FunctionComponent<AccountProps> = ({
  service,
  link,
  className,
}) => (
  <div className={classnames(classes.SocialAccount, className)}>
    <svg className={classes.SocialAccount__Icon}>
      <use xlinkHref={`#${service}`} />
    </svg>

    <span>{link}</span>
  </div>
)

export default SocialAccount
