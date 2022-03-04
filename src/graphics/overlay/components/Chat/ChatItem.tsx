import { ComponentType, createElement, FunctionComponent, h } from 'preact'
import {
  ChatNotification,
  ChatMessage,
  ChatMessageTypeWithNotifications,
} from 'nodecg-twitchie-graphics'

import MessageTokens from './MessageTokens'
import Message, { MessageProps } from './Message'

interface ChatItemProps {
  item: ChatNotification | ChatMessage
  messageComponent?: ComponentType<MessageProps>
}

const ChatItem: FunctionComponent<ChatItemProps> = ({
  item,
  messageComponent = Message,
}) => {
  if (item.type !== ChatMessageTypeWithNotifications.message) {
    return null
  }

  return createElement(messageComponent, {
    item,
    user: item.user.name,
    message: <MessageTokens tokens={item.tokens} />,
  })
}

export default ChatItem
