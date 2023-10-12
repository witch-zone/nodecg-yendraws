import { FunctionComponent, h } from 'preact'

import classes from './Schedule.module.scss'

interface ScheduleItemProps {
  day: string
  time: string
}

const ScheduleItem: FunctionComponent<ScheduleItemProps> = ({ day, time }) => (
  <div className={classes.ScheduleItem}>
    <span className={classes.ScheduleItem__Day}>{day}</span>
    <span className={classes.ScheduleItem__Time}>{time}</span>
  </div>
)

export default ScheduleItem
