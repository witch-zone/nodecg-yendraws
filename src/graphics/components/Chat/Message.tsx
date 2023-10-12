import { ComponentChildren, FunctionComponent, h } from 'preact'
import { ChatMessage } from 'nodecg-twitchie-graphics'
import classnames from 'classnames'

import classes from './Chat.module.scss'

interface MessageProps {
  item?: ChatMessage
  user: ComponentChildren
  message: ComponentChildren
}

const Message: FunctionComponent<MessageProps> = ({ user, message }) => (
  <div
    className={classnames(
      classes.ChatItem,
      classes.ChatMessage,
      'c-chat-item c-chat-message',
    )}
  >
    <div className={classnames(classes.ChatItem__User, 'c-chat-message__user')}>
      {user}
    </div>

    <div className="c-chat-message__message">{message}</div>
  </div>
)

export { MessageProps }
export default Message
