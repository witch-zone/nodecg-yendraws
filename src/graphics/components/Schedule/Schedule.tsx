import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'

import { useOverlayStore } from '../../store'

import ScheduleTime from './ScheduleTime'

interface ScheduleProps {
  className?: string
}

const Schedule: FunctionComponent<ScheduleProps> = ({ className }) => {
  const schedule = useOverlayStore((state) => state.schedule)

  if (!schedule || Object.keys(schedule).length === 0) {
    return null
  }

  return (
    <div className={classnames('c-schedule', className)}>
      {Object.entries(schedule).map(([day, time]) => (
        <ScheduleTime day={day} time={time} className="c-schedule__time" />
      ))}
    </div>
  )
}

export default Schedule
