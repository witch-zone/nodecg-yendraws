import { ChatEmoteMessageToken } from 'nodecg-twitchie'
import { FunctionComponent, h } from 'preact'

interface EmoteTokenProps {
  token: ChatEmoteMessageToken
}

const EmoteToken: FunctionComponent<EmoteTokenProps> = ({ token }) => (
  <img src={`https://static-cdn.jtvnw.net/emoticons/v1/${token.id}/3.0`} alt={token.name} className="o-emote" />
)

export { EmoteTokenProps }
export default EmoteToken
