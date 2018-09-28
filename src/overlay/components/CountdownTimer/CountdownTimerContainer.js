import moment from 'moment'
import {
  compose,
  setDisplayName,
  lifecycle,
  withStateHandlers,
  withPropsOnChange,
} from 'recompose'

import CountdownTimer from './CountdownTimer'

const createProps = ({
  target,
}) => ({
  target: moment.utc(target),
})

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

const createInitialState = () => ({
  countdown: null,
})

const createStateHandlers = {
  onUpdateCountdown: (_, { target }) => () => ({
    countdown: calculateTimeRemaining(target),
  })
}

const lifecycleHandlers = {
  componentDidMount() {
    const { onUpdateCountdown } = this.props
    setInterval(onUpdateCountdown, 1000)
  }
}

export default compose(
  setDisplayName('CountdownTimerContainer'),
  withPropsOnChange(['target'], createProps),
  withStateHandlers(createInitialState, createStateHandlers),
  lifecycle(lifecycleHandlers),
)(CountdownTimer)
