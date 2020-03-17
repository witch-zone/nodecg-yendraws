import { FunctionComponent, h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import twemoji from 'twemoji'

const Twemoji: FunctionComponent = ({ children }) => {
  const messageRef = useRef<HTMLElement>()

  useEffect(() => {
    twemoji.parse(messageRef.current!, { className: 'c-twemoji' })
  }, [children])

  return <span ref={messageRef}>{children}</span>
}

export default Twemoji
