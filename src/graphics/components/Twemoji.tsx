import { FunctionComponent, h } from 'preact'
import { useMemo } from 'preact/hooks'
import twemoji from 'twemoji'

interface TwemojiProps {
  message?: string
}

const Twemoji: FunctionComponent<TwemojiProps> = ({ message }) => {
  const parsedMessage = useMemo(() => {
    if (!message) {
      return ''
    }

    return twemoji.parse(message, {
      className: 'c-twemoji',
      base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/',
    })
  }, [message])

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: parsedMessage,
      }}
    />
  )
}

export default Twemoji
