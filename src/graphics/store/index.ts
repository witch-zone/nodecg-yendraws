import create from 'zustand'
import { store, TwitchieStore } from 'nodecg-twitchie-graphics'

import { OverlayStore, Schedule, Timer } from '../types'

const useStore = create<TwitchieStore>(store)

const useOverlayStore = create<OverlayStore>(() => ({
  schedule: {},
  timer: undefined,
}))

const timerReplicant = nodecg.Replicant<Timer>(
  'graphics.timer',
  'nodecg-yendraws',
)
const scheduleReplicant = nodecg.Replicant<Schedule>(
  'schedule',
  'nodecg-yendraws',
  {
    persistent: true,
    defaultValue: {},
  },
)

scheduleReplicant.on('change', (newSchedule) => {
  useOverlayStore.setState({
    schedule: Object.entries(newSchedule ?? {})
      .filter(([, value]) => !!value)
      .reduce(
        (obj, [key, value]) => ({
          ...obj,
          [key]: value,
        }),
        {},
      ),
  })
})

timerReplicant.on('change', (newTimer) => {
  useOverlayStore.setState({
    timer: newTimer,
  })
})

export { useOverlayStore }
export default useStore
