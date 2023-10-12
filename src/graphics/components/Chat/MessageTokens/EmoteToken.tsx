import { ChatEmoteMessageToken } from 'nodecg-twitchie'
import { FunctionComponent, h } from 'preact'
import classnames from 'classnames'

import classes from './EmoteToken.module.scss'

interface EmoteTokenProps {
  token: ChatEmoteMessageToken
  format?: 'default' | 'static' | 'animated'
  theme?: 'light' | 'dark'
  scale?: '1.0' | '2.0' | '3.0'
  className?: string
}

const EmoteToken: FunctionComponent<EmoteTokenProps> = ({
  token,
  format = 'default',
  theme = 'dark',
  scale = '3.0',
  className,
}) => (
  <img
    src={`https://static-cdn.jtvnw.net/emoticons/v2/${token.id}/${format}/${theme}/${scale}`}
    width="112"
    height="112"
    alt={token.name}
    className={classnames(classes.Emote, className)}
  />
)

export { EmoteTokenProps }
export default EmoteToken
