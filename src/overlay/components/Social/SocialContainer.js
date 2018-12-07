import { compose, setDisplayName } from 'recompose'
import { connect } from 'preact-redux'

import { getSocialAccounts } from 'nodecg-twitchie-graphics/overlay-provider/selectors/social'

import Social from './Social'

const mapStateToProps = (state) => ({
  accounts: getSocialAccounts(state),
})

export default compose(
  setDisplayName('PlayerContainer'),
  connect(mapStateToProps),
)(Social)
