import { h, Component } from 'preact'
import Velocity from 'velocity-animate'

import Message from './Message'

class Chat extends Component {
  componentDidUpdate() {
    const offset = Math.min(
      this.$chat.offsetHeight - this.$messages.offsetHeight,
      0
    )

    Velocity(
      this.$messages,
      'stop'
    )

    Velocity(
      this.$messages,
      {
        translateY: `${offset}px`,
        duration: 800
      }
    )
  }

  render() {
    const {
      messages,
    } = this.props

    return (
      <div
        className="c-message-list"
        ref={(chatRef) => { this.$chat = chatRef }}
      >
        <div
          className="c-message-list__wrapper"
          ref={(messagesRef) => { this.$messages = messagesRef }}
        >
          {messages.map(
            (message) => (
              <Message
                className="c-message-list__message"
                user={message.user}
                message={message.message}
                topic={message.topic}
              />
            )
          )}
        </div>
      </div>
    )
  }
}

export default Chat
