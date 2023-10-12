import moment from 'moment'
import { FunctionComponent, Fragment, h } from 'preact'

import { useCallback, useEffect, useMemo, useState } from 'preact/hooks'
import calculateTimeRemaining from './utils/calculateTimeRemaining'

import classes from './CountdownTimer.module.scss'

interface CountdownTimerProps {
  target: string | undefined
}

const CountdownTimer: FunctionComponent<CountdownTimerProps> = ({ target }) => {
  const targetMoment = useMemo(() => moment.utc(target || undefined), [target])
  const [countdown, updateCountdown] = useState<string | null>(null)

  const onUpdateCountdown = useCallback(() => {
    updateCountdown(
      targetMoment.isValid() ? calculateTimeRemaining(targetMoment) : null,
    )
  }, [targetMoment, updateCountdown])

  useEffect(() => {
    const tickTock = setInterval(onUpdateCountdown, 500)

    return () => {
      clearInterval(tickTock)
    }
  })

  return (
    <span className={classes.CountdownTimer}>
      {countdown && (
        <Fragment>
          Please hold on for
          <span className={classes.CountdownTimer__Remaining}>
            {countdown}!
          </span>
        </Fragment>
      )}
    </span>
  )
}

export default CountdownTimer
