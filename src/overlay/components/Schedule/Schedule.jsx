import { h } from 'preact'
import classnames from 'classnames'

import ScheduleTime from './ScheduleTime'

const Schedule = ({
  schedule,
  className,
}) => (
  <div
    className={classnames(
      'c-schedule',
      className,
    )}
  >
    {Object.keys(schedule || {}).map(
      (day) => (
        <ScheduleTime
          day={day}
          time={schedule[day]}
          className="c-schedule__time"
        />
      )
    )}
  </div>
)

export default Schedule
