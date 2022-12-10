import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'

interface ScheduleProps {
  day: string
  time: string
  className?: string
}

const Schedule: FunctionComponent<ScheduleProps> = ({
  day,
  time,
  className,
}) => (
  <div className={classnames('c-schedule-time', className)}>
    <span className="c-schedule-time__day">{day}</span>
    <span className="c-schedule-time__time">{time}</span>
  </div>
)

export default Schedule
