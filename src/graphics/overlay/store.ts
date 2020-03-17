import { Reducer } from 'redux'

const UPDATE_SCHEDULE_ACTION = 'schedule/UPDATE'

const updateSchedule = (schedule: any) => ({
  type: UPDATE_SCHEDULE_ACTION,
  payload: schedule,
})

const defaultState = {}

const scheduleReducer: Reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case UPDATE_SCHEDULE_ACTION:
      return Object.keys(payload)
        .filter(key => !!payload[key])
        .reduce(
          (obj, key) => ({
            ...obj,
            [key]: payload[key],
          }),
          {}
        )
    default:
      return state
  }
}

const reducers = {
  schedule: scheduleReducer,
}

const getScheduleFromState = (state: any) => state.schedule

export { getScheduleFromState, scheduleReducer, reducers, updateSchedule, UPDATE_SCHEDULE_ACTION }
