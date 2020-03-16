import { connect } from 'preact-redux'

import Chat from './Chat'

export default connect(
  (state) => ({
    messages: state.chat.messages,
  })
)(Chat)
