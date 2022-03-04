import create from 'zustand'
import { store, TwitchieStore } from 'nodecg-twitchie-graphics'

import { OverlayStore, Schedule, Timer } from '../types'

const useStore = create<TwitchieStore>(store)

const useOverlayStore = create<OverlayStore>(() => ({
  schedule: {},
  timer: undefined,
}))

const scheduleReplicant = nodecg.Replicant('schedule', 'nodecg-yendraws')
const timerReplicant = nodecg.Replicant('graphics.timer', 'nodecg-yendraws')

scheduleReplicant.on('change', (newSchedule: Schedule) => {
  console.log(
    Object.entries(newSchedule)
      .filter(([, value]) => !!value)
      .reduce(
        (obj, [key, value]) => ({
          ...obj,
          [key]: value,
        }),
        {},
      ),
  )
  useOverlayStore.setState({
    schedule: Object.entries(newSchedule)
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

timerReplicant.on('change', (newTimer: Timer) => {
  console.log(newTimer)
  useOverlayStore.setState({
    timer: newTimer,
  })
})

export { useOverlayStore }
export default useStore
