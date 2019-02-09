import { h } from 'preact'
import classnames from 'classnames'

const CountdownTimer = ({
  countdown,
  className,
}) => (
  (countdown !== null) && (
    <span
      className={classnames(
        'c-countdown-timer',
        className
      )}
    >
      Please hold on for

      <span className="c-countdown-timer__remaining">
        {countdown}!
      </span>
    </span>
  )
)

export default CountdownTimer
