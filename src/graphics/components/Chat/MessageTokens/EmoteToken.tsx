import { ChatEmoteMessageToken } from 'nodecg-twitchie'
import { FunctionComponent, h } from 'preact'

interface EmoteTokenProps {
  token: ChatEmoteMessageToken
  format?: 'default' | 'static' | 'animated'
  theme?: 'light' | 'dark'
  scale?: '1.0' | '2.0' | '3.0'
}

const EmoteToken: FunctionComponent<EmoteTokenProps> = ({
  token,
  format = 'default',
  theme = 'dark',
  scale = '3.0',
}) => (
  <img
    src={`https://static-cdn.jtvnw.net/emoticons/v2/${token.id}/${format}/${theme}/${scale}`}
    width="112"
    height="112"
    alt={token.name}
    className="o-emote"
  />
)

export { EmoteTokenProps }
export default EmoteToken
