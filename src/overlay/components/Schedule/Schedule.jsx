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
        />
      )
    )}
  </div>
)

export default Schedule
