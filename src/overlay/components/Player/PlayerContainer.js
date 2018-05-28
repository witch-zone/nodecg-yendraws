import { compose, setDisplayName } from 'recompose'
import { connect } from 'preact-redux'

import { getChannelInfo } from 'nodecg-twitchie-graphics/overlay-provider/selectors/channel'

import Player from './Player'

const mapStateToProps = (state) => ({
  ...getChannelInfo(state),
})

export default compose(
  setDisplayName('PlayerContainer'),
  connect(mapStateToProps),
)(Player)
