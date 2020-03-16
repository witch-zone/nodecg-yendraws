/* global nodecg */

import { updateSchedule } from './store'

const bindDispatch = ({ dispatch }: any) => {
  const scheduleReplicant = nodecg.Replicant('schedule', 'nodecg-yendraws')

  const dispatchScheduleUpdate = (newSchedule: any) => {
    dispatch(updateSchedule(newSchedule))
  }

  scheduleReplicant.on('change', dispatchScheduleUpdate)
}

export default bindDispatch
