import moment from 'moment'
import {
  compose,
  setDisplayName,
  lifecycle,
  withStateHandlers,
  withPropsOnChange,
} from 'recompose'

import CountdownTimer from './CountdownTimer'

import calculateTimeRemaining from './utils/calculateTimeRemaining'

const createProps = ({
  target,
}) => ({
  target: moment.utc(target),
})

const createInitialState = () => ({
  countdown: null,
})

const stateHandlers = {
  onUpdateCountdown: (_, { target }) => () => ({
    countdown: target.isValid()
      ? calculateTimeRemaining(target)
      : null,
  })
}

const lifecycleHandlers = {
  componentDidMount() {
    const { onUpdateCountdown } = this.props
    this.ticker = setInterval(onUpdateCountdown, 1000)
  },
  componentWillUnmount() {
    clearInterval(this.ticker)
  }
}

export default compose(
  setDisplayName('CountdownTimerContainer'),
  withPropsOnChange(['target'], createProps),
  withStateHandlers(createInitialState, stateHandlers),
  lifecycle(lifecycleHandlers),
)(CountdownTimer)
