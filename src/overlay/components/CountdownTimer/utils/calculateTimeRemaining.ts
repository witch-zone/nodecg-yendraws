import moment from 'moment'

const pluralise = (amount: number, unit: string) => `${amount} ${unit}${amount !== 1 ? 's' : ''}`

const getCountdownText = (diff: number) => {
  if (diff <= 0) {
    return null
  }

  const diffMoment = moment.utc(diff)

  const hoursString = diffMoment.hours() > 0 ? `${pluralise(diffMoment.hours(), 'hour')}, ` : ''

  const minutesString = diffMoment.minutes() > 0 ? `${pluralise(diffMoment.minutes(), 'minute')} and ` : 'just '

  const secondsString = pluralise(diffMoment.seconds(), 'second')

  return `${hoursString}${minutesString}${secondsString}`
}

const calculateTimeRemaining = (target: moment.Moment) => {
  const now = moment.utc()
  const diff = target.diff(now)
  return getCountdownText(diff)
}

export { getCountdownText }

export default calculateTimeRemaining
