import { FunctionComponent, h } from 'preact'
import classnames from 'classnames'

import classes from './SpeechBubble.module.scss'

interface SpeechBubbleProps {
  className?: string
}

const SpeechBubble: FunctionComponent<SpeechBubbleProps> = ({
  children,
  className,
}) => (
  <div className={classnames(classes.SpeechBubble, className)}>
    <div className={classes.SpeechBubble__Tail}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.57 5.28">
        <path d="M.01.96c.2-.42 1.08-.3 2.4-.48C3.14.38 3.85.22 4.57 0v5.28c-.59-.28-1.15-.6-1.68-.96C1.51 3.38-.16 1.37.01.96Z" />
      </svg>
    </div>

    <div className={classes.SpeechBubble__Text}>{children}</div>
  </div>
)

export default SpeechBubble
