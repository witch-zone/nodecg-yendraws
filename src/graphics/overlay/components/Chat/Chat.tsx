import { ChatMessageTypeWithNotifications, getChatMessages } from 'nodecg-twitchie-graphics'
import { ComponentType, createElement, FunctionComponent, h } from 'preact'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'preact/hooks'
import { Motion, spring } from 'react-motion'
import { useSelector } from 'react-redux'

import Message, { MessageProps } from './Message'
import Notification, { NotificationProps } from './Notification'

const DEFAULT_MAX_VISIBLE_MESSAGES = 20
const messageHeights: Record<string, number> = {}

interface ChatProps {
  messageComponent?: ComponentType<MessageProps>
  notificationComponent?: ComponentType<NotificationProps>
}

const useMutationObserver = (target: Node | undefined, config: MutationObserverInit, callback: MutationCallback) => {
  const observer = useMemo(() => new MutationObserver(callback), [callback])

  useEffect(() => {
    if (!target) {
      return
    }

    observer.observe(target, config)

    return () => {
      observer.disconnect()
    }
  }, [target, config, observer])
}

const useVirtualisedMessages = (limit = DEFAULT_MAX_VISIBLE_MESSAGES) => {
  const messages = useSelector(getChatMessages)

  if (messages.length <= limit) {
    return [0, messages] as const
  }

  const visibleMessages = messages.slice(-limit)
  const hiddenMessages = messages.slice(0, -limit)

  const hiddenMessagesHeight = hiddenMessages.reduce((totalHeight, { id }) => totalHeight + messageHeights[id!], 0)

  return [hiddenMessagesHeight, visibleMessages] as const
}

const ChatMessageWrapper: FunctionComponent<any> = ({ children, id }) => {
  const messageRef = useRef<HTMLDivElement>()

  useLayoutEffect(() => {
    messageHeights[id] = messageRef.current!.offsetHeight
  }, [])

  return <div ref={messageRef}>{children}</div>
}

const Chat: FunctionComponent<ChatProps> = ({ messageComponent = Message, notificationComponent = Notification }) => {
  const chatRef = useRef<HTMLDivElement>()
  const messagesWrapperRef = useRef<HTMLDivElement>()
  const [scrollOffset, setOffset] = useState<number>(0)

  const [messageOffset, visibleMessages] = useVirtualisedMessages()

  useMutationObserver(messagesWrapperRef.current, { childList: true }, () => {
    setOffset(Math.min(chatRef.current!.offsetHeight - messagesWrapperRef.current!.offsetHeight, 0))
  })

  return (
    <div ref={chatRef} className="c-chat">
      <Motion defaultStyle={{ y: 0 }} style={{ y: spring(scrollOffset) }}>
        {styles => (
          <div style={{ transform: `translateY(${styles.y}px)` }} ref={messagesWrapperRef} className="c-chat__wrapper">
            <div style={{ height: `${messageOffset}px` }} className="c-chat__message-placeholder" />

            {visibleMessages.map(message => (
              <ChatMessageWrapper id={message.id} key={message.id}>
                {message.type === ChatMessageTypeWithNotifications.NOTIFICATION
                  ? createElement(notificationComponent, { notification: message })
                  : createElement(messageComponent, { message })}
              </ChatMessageWrapper>
            ))}
          </div>
        )}
      </Motion>
    </div>
  )
}

export default Chat
