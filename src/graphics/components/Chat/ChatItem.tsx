import {
  Fragment,
  ComponentType,
  createElement,
  FunctionComponent,
  h,
} from 'preact'
import { memo } from 'preact/compat'
import {
  ChatNotification,
  ChatMessage,
  NotificationType,
  ChatMessageTypeWithNotifications,
} from 'nodecg-twitchie-graphics'

import MessageTokens from './MessageTokens'
import Message, { MessageProps } from './Message'
import Notification, { NotificationProps } from './Notification'

interface ChatMessageItemProps {
  item: ChatMessage
  messageComponent?: ComponentType<MessageProps>
}

interface ChatNotificationItemProps {
  item: ChatNotification
  messageComponent?: ComponentType<MessageProps>
  notificationComponent?: ComponentType<NotificationProps>
}

interface ChatItemProps {
  item: ChatNotification | ChatMessage
  messageComponent?: ComponentType<MessageProps>
  notificationComponent?: ComponentType<NotificationProps>
}

const ChatMessageItem: FunctionComponent<ChatMessageItemProps> = ({
  item,
  messageComponent = Message,
}) => {
  if (item.type === ChatMessageTypeWithNotifications.message) {
    return createElement(messageComponent, {
      item,
      user: item.user.name,
      message: <MessageTokens tokens={item.tokens} />,
    })
  }

  return null
}

const ChatNotificationItem: FunctionComponent<ChatNotificationItemProps> = ({
  item,
  messageComponent = Message,
  notificationComponent = Notification,
}) => {
  if (item.topic === NotificationType.follower) {
    return createElement(notificationComponent, {
      item,
      user: item.userDisplayName ?? item.userName,
      message: 'just followed!',
    })
  }

  if (item.topic === NotificationType.subscriber) {
    return (
      <Fragment>
        {createElement(notificationComponent, {
          item,
          user: item.userDisplayName ?? item.userName,
          message: 'just subscribed!',
        })}

        {item.messageText &&
          createElement(messageComponent, {
            user: item.userDisplayName ?? item.userName,
            message: item.messageText,
          })}
      </Fragment>
    )
  }

  if (item.topic === NotificationType.subscriber_gift) {
    const gifterName = item.gifterDisplayName ?? item.gifterName

    return createElement(notificationComponent, {
      item,
      user: gifterName ?? 'Someone',
      message:
        item.amount && item.amount > 1
          ? `just gave out ${item.amount} gifts!`
          : 'just gave someone a gift!',
    })
  }

  return null
}

const ChatItem: FunctionComponent<ChatItemProps> = ({
  item,
  messageComponent,
  notificationComponent,
}) => {
  if (item.type === ChatMessageTypeWithNotifications.notification) {
    return (
      <ChatNotificationItem
        item={item}
        messageComponent={messageComponent}
        notificationComponent={notificationComponent}
      />
    )
  }

  return <ChatMessageItem item={item} messageComponent={messageComponent} />
}

export default memo(ChatItem)
