import { compose, setDisplayName } from 'recompose'
import { connect } from 'preact-redux'

import Schedule from './Schedule'
import { getScheduleFromState } from '../../store'

const mapStateToProps = (state) => ({
  schedule: getScheduleFromState(state),
})

export default compose(
  setDisplayName('ScheduleContainer'),
  connect(mapStateToProps),
)(Schedule)
