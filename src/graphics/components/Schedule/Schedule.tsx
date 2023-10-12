import { FunctionComponent, h } from 'preact'

import { useOverlayStore } from '../../store'

import ScheduleTime from './ScheduleTime'

import classes from './Schedule.module.scss'

const Schedule: FunctionComponent = () => {
  const schedule = useOverlayStore((state) => state.schedule)

  console.log(schedule)

  if (!schedule || Object.keys(schedule).length === 0) {
    return null
  }

  return (
    <div className={classes.Schedule}>
      {Object.entries(schedule).map(([day, time]) => (
        <div className={classes.Schedule__Item}>
          <ScheduleTime day={day} time={time} />
        </div>
      ))}
    </div>
  )
}

export default Schedule
