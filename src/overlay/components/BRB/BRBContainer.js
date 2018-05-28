import { compose, setDisplayName } from 'recompose'
import { connect } from 'preact-redux'

import { getMessage } from 'nodecg-twitchie-graphics/overlay-provider/selectors/brb'

import BRB from './BRB'

const mapStateToProps = (state) => ({
  message: getMessage(state),
  timer: new Date(Date.now() + (1000 * 600)),
})

export default compose(
  setDisplayName('BRBContainer'),
  connect(mapStateToProps),
)(BRB)
