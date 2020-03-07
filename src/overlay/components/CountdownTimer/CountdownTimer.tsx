import classnames from 'classnames'
import moment from 'moment'
import { FunctionComponent, h } from 'preact'

import { useCallback, useEffect, useMemo, useState } from 'preact/hooks'
import calculateTimeRemaining from './utils/calculateTimeRemaining'

interface CountdownTimerProps {
  target: number
  className?: string
}

const CountdownTimer: FunctionComponent<CountdownTimerProps> = ({ target, className }) => {
  const targetMoment = useMemo(() => moment.utc(target), [target])
  const [countdown, updateCountdown] = useState<string | null>(null)

  const onUpdateCountdown = useCallback(() => {
    updateCountdown(targetMoment.isValid() ? calculateTimeRemaining(targetMoment) : null)
  }, [targetMoment, updateCountdown])

  useEffect(() => {
    const tickTock = setInterval(onUpdateCountdown, 1000)

    return () => {
      clearInterval(tickTock)
    }
  })

  return countdown !== null ? (
    <span className={classnames('c-countdown-timer', className)}>
      Please hold on for
      <span className="c-countdown-timer__remaining">{countdown}!</span>
    </span>
  ) : null
}

export default CountdownTimer
