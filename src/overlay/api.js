/* global nodecg */

import { updateSchedule } from './store'

const bindDispatch = ({ dispatch }) => {
  const scheduleReplicant = nodecg.Replicant('schedule', 'nodecg-yendraws')

  const dispatchScheduleUpdate = (newSchedule) => {
    dispatch(updateSchedule(newSchedule))
  }

  scheduleReplicant.on(
    'change',
    dispatchScheduleUpdate,
  )
}

export default bindDispatch
