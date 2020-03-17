import { ChatMessageTypeWithNotifications, getChatMessages } from 'nodecg-twitchie-graphics'
import { ComponentType, createElement, FunctionComponent, h } from 'preact'
import { useEffect, useMemo, useRef, useState } from 'preact/hooks'
import { Motion, spring } from 'react-motion'
import { useSelector } from 'react-redux'

import Message, { MessageProps } from './Message'
import Notification, { NotificationProps } from './Notification'

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

const Chat: FunctionComponent<ChatProps> = ({ messageComponent = Message, notificationComponent = Notification }) => {
  const chatRef = useRef<HTMLDivElement>()
  const messagesWrapperRef = useRef<HTMLDivElement>()

  const messages = useSelector(getChatMessages)

  const [offset, setOffset] = useState<number>(0)

  useMutationObserver(messagesWrapperRef.current, { childList: true }, () => {
    setOffset(Math.min(chatRef.current!.offsetHeight - messagesWrapperRef.current!.offsetHeight, 0))
  })

  return (
    <div ref={chatRef} className="c-chat">
      <Motion defaultStyle={{ y: 0 }} style={{ y: spring(offset) }}>
        {styles => (
          <div style={{ transform: `translateY(${styles.y}px)` }} ref={messagesWrapperRef} className="c-chat__wrapper">
            {messages.map(message => {
              if (message.type === ChatMessageTypeWithNotifications.NOTIFICATION) {
                return createElement(notificationComponent, { key: message.id, notification: message })
              }

              return createElement(messageComponent, { key: message.id, message })
            })}
          </div>
        )}
      </Motion>
    </div>
  )
}

export default Chat
