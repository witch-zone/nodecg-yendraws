import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'

import useStore from '../../store'

import Account from './Account'

const ROTATE_TIMEOUT = 6000

interface SocialProps {
  rightAlign?: boolean
  className?: string
}

const Social: FunctionComponent<SocialProps> = ({ className, rightAlign }) => {
  const accounts = useStore((state) => state.social)
  const [active, setActive] = useState(0)

  const showNextAccount = useCallback(() => {
    const nextAccountId = active < accounts.length - 1 ? active + 1 : 0
    setActive(nextAccountId)
  }, [active, accounts])

  useEffect(() => {
    const rotateInterval = setInterval(showNextAccount, ROTATE_TIMEOUT)

    return () => {
      clearInterval(rotateInterval)
    }
  }, [showNextAccount])

  return (
    <div className={classnames('c-social-links', className)}>
      {accounts.map(({ service, username }, idx) => (
        <Account
          className={classnames('c-social-links__service', {
            'c-social-links__service--right': !!rightAlign,
            'c-social-links__service--active': active === idx,
          })}
          service={service}
          link={username}
        />
      ))}
    </div>
  )
}

export default Social
