import { h } from 'preact'

const CountdownTimer = ({
  countdown,
}) => (
  (countdown !== null) && (
    <span className="c-countdown-timer">
      We&apos;ll be back in

      <span className="c-countdown-timer__remaining">
        {countdown}!
      </span>
    </span>
  )
)

export default CountdownTimer
