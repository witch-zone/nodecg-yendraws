import { compose, setDisplayName } from 'recompose'
import { connect } from 'preact-redux'

import { getMessage } from 'nodecg-twitchie-graphics/overlay-provider/selectors/brb'
import { getTimer } from 'nodecg-twitchie-graphics/overlay-provider/selectors/timer'

import BRB from './BRB'

const mapStateToProps = (state) => ({
  message: getMessage(state),
  timer: getTimer(state),
})

export default compose(
  setDisplayName('BRBContainer'),
  connect(mapStateToProps),
)(BRB)
