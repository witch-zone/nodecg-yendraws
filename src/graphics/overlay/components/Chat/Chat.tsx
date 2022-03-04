import { ComponentType, FunctionComponent, h } from 'preact'
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'preact/hooks'
import { Motion, spring } from 'react-motion'

import useStore from '../../../store'

import { MessageProps } from './Message'
import ChatItem from './ChatItem'

const DEFAULT_MAX_VISIBLE_ITEMS = 20
const itemHeights: Record<string, number> = {}

interface ChatProps {
  messageComponent?: ComponentType<MessageProps>
}

const useMutationObserver = (
  target: Node | null,
  config: MutationObserverInit,
  callback: MutationCallback,
) => {
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

const ChatItemWrapper: FunctionComponent<any> = ({ children, id }) => {
  const itemRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    itemHeights[id] = itemRef.current!.offsetHeight
  }, [])

  return <div ref={itemRef}>{children}</div>
}

const Chat: FunctionComponent<ChatProps> = ({ messageComponent }) => {
  const chatRef = useRef<HTMLDivElement>(null)
  const itemsWrapperRef = useRef<HTMLDivElement>(null)
  const [scrollOffset, setOffset] = useState<number>(0)

  const [itemOffset, visibleItems] = useVirtualisedItems()

  useMutationObserver(itemsWrapperRef.current, { childList: true }, () => {
    setOffset(
      Math.min(
        chatRef.current!.offsetHeight - itemsWrapperRef.current!.offsetHeight,
        0,
      ),
    )
  })

  return (
    <div ref={chatRef} className="c-chat">
      <Motion defaultStyle={{ y: 0 }} style={{ y: spring(scrollOffset) }}>
        {(styles) => (
          <div
            style={{ transform: `translateY(${styles.y}px)` }}
            ref={itemsWrapperRef}
            className="c-chat__wrapper"
          >
            <div
              style={{ height: `${itemOffset}px` }}
              className="c-chat__placeholder"
            />

            {visibleItems.map((item) => (
              <ChatItemWrapper id={item.id} key={item.id}>
                <ChatItem item={item} messageComponent={messageComponent} />
              </ChatItemWrapper>
            ))}
          </div>
        )}
      </Motion>
    </div>
  )
}

export default Chat
