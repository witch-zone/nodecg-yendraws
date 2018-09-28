import moment from 'moment'

const getCountdownText = (diff) => {
  if (diff <= 0) {
    return null
  }

  const diffMoment = moment.utc(diff)

  return diffMoment.format(
    diffMoment.hours() > 0
      ? 'H:mm:ss'
      : 'm:ss'
  )
}

const calculateTimeRemaining = (target) => {
  const now = moment.utc()
  const diff = target.diff(now)
  return getCountdownText(diff)
}

export { getCountdownText }

export default calculateTimeRemaining
