import { h } from 'preact'
import classnames from 'classnames'

const Schedule = ({
  day,
  time,
  className,
}) => (
  <div
    className={classnames(
      'c-schedule-time',
      className,
    )}
  >
    <span className="c-scedule-time__day">
      {day}
    </span>

    <span className="c-schedule-time__time">
      {time}
    </span>
  </div>
)

export default Schedule
