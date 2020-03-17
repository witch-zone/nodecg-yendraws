import { ChatMessage } from 'nodecg-twitchie'
import { FunctionComponent, h } from 'preact'

import MessageTokens from './MessageTokens'

interface MessageProps {
  message: ChatMessage
}

const Message: FunctionComponent<MessageProps> = ({ message }) => (
  <div className="c-chat-item c-chat-message">
    <div className="c-chat-message__user">{message.user.name}</div>
    <div className="c-chat-message__message">
      <MessageTokens tokens={message.tokens} />
    </div>
  </div>
)

export { MessageProps }
export default Message
