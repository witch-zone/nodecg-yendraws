import { ChatNotification } from 'nodecg-twitchie-graphics'
import { ComponentChildren, FunctionComponent, h } from 'preact'
import classnames from 'classnames'

import classes from './Chat.module.scss'

interface NotificationProps {
  item: ChatNotification
  user: ComponentChildren
  message: ComponentChildren
}

const Notification: FunctionComponent<NotificationProps> = ({
  user,
  message,
}) => (
  <div
    className={classnames(classes.ChatItem, 'c-chat-item c-chat-notification')}
  >
    <span className="c-chat-notification__user">{user}</span>{' '}
    <span className="c-chat-notification__topic">{message}</span>
  </div>
)

export { NotificationProps }
export default Notification
