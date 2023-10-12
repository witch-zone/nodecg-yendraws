import { ComponentType, FunctionComponent, h } from 'preact'
import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'preact/hooks'
import { Motion, spring } from 'react-motion'
import classnames from 'classnames'

import useStore from '../../store'

import { MessageProps } from './Message'
import { NotificationProps } from './Notification'
import ChatItem from './ChatItem'

import classes from './Chat.module.scss'

const DEFAULT_MAX_VISIBLE_ITEMS = 20
const itemHeights: Record<string, number> = {}

interface ChatProps {
  messageComponent?: ComponentType<MessageProps>
  notificationComponent?: ComponentType<NotificationProps>
}

const useVirtualisedItems = (limit = DEFAULT_MAX_VISIBLE_ITEMS) => {
  const items = useStore((store) => store.chat.items)

  if (items.length <= limit) {
    return [0, items] as const
  }

  const visibleItems = items.slice(-limit)
  const hiddenItems = items.slice(0, -limit)

  const hiddenItemsHeight = hiddenItems.reduce(
    (totalHeight, { id }) => totalHeight + itemHeights[id!],
    0,
  )

  return [hiddenItemsHeight, visibleItems] as const
}

const ChatItemWrapper: FunctionComponent<{ id?: string }> = ({
  children,
  id,
}) => {
  const itemRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    itemHeights[id!] = itemRef.current!.offsetHeight
  }, [itemRef.current?.offsetHeight])

  return <div ref={itemRef}>{children}</div>
}

const Chat: FunctionComponent<ChatProps> = ({
  messageComponent,
  notificationComponent,
}) => {
  const chatRef = useRef<HTMLDivElement | null>(null)
  const itemsWrapperRef = useRef<HTMLDivElement | null>(null)
  const [scrollOffset, setOffset] = useState<number>(0)

  const [itemOffset, visibleItems] = useVirtualisedItems()

  const observer = useMemo(
    () =>
      new MutationObserver(() => {
        setOffset(
          Math.min(
            chatRef.current!.offsetHeight -
              itemsWrapperRef.current!.offsetHeight,
            0,
          ),
        )
      }),
    [],
  )

  const onWrapperRefUpdate = useCallback((newNode: HTMLDivElement | null) => {
    if (!newNode) {
      return
    }

    itemsWrapperRef.current = newNode
    observer.observe(newNode, { childList: true })
  }, [])

  return (
    <div ref={chatRef} className={classnames(classes.Chat, 'c-chat')}>
      <Motion defaultStyle={{ y: 0 }} style={{ y: spring(scrollOffset) }}>
        {(styles) => (
          <div
            style={{ transform: `translateY(${styles.y}px)` }}
            ref={onWrapperRefUpdate}
            className={classnames(classes.Chat__Wrapper, 'c-chat__wrapper')}
          >
            <div
              className="c-chat__placeholder"
              style={{ height: `${itemOffset}px` }}
            />

            {visibleItems.map((item) => (
              <ChatItemWrapper id={item.id} key={item.id}>
                <ChatItem
                  item={item}
                  messageComponent={messageComponent}
                  notificationComponent={notificationComponent}
                />
              </ChatItemWrapper>
            ))}
          </div>
        )}
      </Motion>
    </div>
  )
}

export default Chat
