import { FunctionComponent, h } from 'preact'
import { useMemo } from 'preact/hooks'
import twemoji from 'twemoji'

import classes from './Emoji.module.scss'

interface EmojiProps {
  message?: string
}

const Emoji: FunctionComponent<EmojiProps> = ({ message }) => {
  const parsedMessage = useMemo(() => {
    if (!message) {
      return ''
    }

    return twemoji.parse(message, {
      className: classes.Emoji,
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

export default Emoji
