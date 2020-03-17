import { ChatNotificationMessage } from 'nodecg-twitchie-graphics'
import { Fragment, FunctionComponent, h } from 'preact'

interface NotificationProps {
  notification: ChatNotificationMessage
}

const Notification: FunctionComponent<NotificationProps> = ({ notification }) => (
  <Fragment>
    <div className="c-chat-item c-chat-notification">
      <span className="c-chat-notification__user">{notification.user}&nbsp;</span>
      <span className="c-chat-notification__topic">
        {notification.topic === 'follower' && <span>just followed!</span>}
        {notification.topic === 'subscriber' && <span>just subscribed!</span>}
      </span>
    </div>

    {notification.message && (
      <div className="c-chat-item c-chat-message">
        <div className="c-chat-message__user">{notification.user}</div>
        <div className="c-chat-message__message">{notification.message}</div>
      </div>
    )}
  </Fragment>
)

export { NotificationProps }
export default Notification
