import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'
import { useSelector } from 'react-redux'

import { getScheduleFromState } from '../../store'
import ScheduleTime from './ScheduleTime'

interface ScheduleProps {
  className?: string
}

const Schedule: FunctionComponent<ScheduleProps> = ({ className }) => {
  const schedule = useSelector(getScheduleFromState)

  return (
    <div className={classnames('c-schedule', className)}>
      {Object.keys(schedule || {}).map(day => (
        <ScheduleTime day={day} time={schedule[day]} className="c-schedule__time" />
      ))}
    </div>
  )
}

export default Schedule
