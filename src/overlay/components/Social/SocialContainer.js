import { compose, setDisplayName, lifecycle, withStateHandlers } from 'recompose'
import { connect } from 'preact-redux'

import { getSocialAccounts } from 'nodecg-twitchie-graphics/overlay-provider/selectors/social'

import Social from './Social'

const mapStateToProps = (state) => ({
  accounts: getSocialAccounts(state),
})

const createInitialState = () => ({
  active: 0,
})

const stateHandlers = {
  showNextAccount: ({ active }, { accounts }) => () => ({
    active: active < (accounts.length - 1)
      ? active + 1
      : 0
  })
}

const lifecycleHandlers = {
  componentDidMount() {
    const { showNextAccount } = this.props
    this.ticker = setInterval(showNextAccount, 6000)
  },
  componentWillUnmount() {
    clearInterval(this.ticker)
  }
}

export default compose(
  setDisplayName('SocialContainer'),
  connect(mapStateToProps),
  withStateHandlers(createInitialState, stateHandlers),
  lifecycle(lifecycleHandlers),
)(Social)
