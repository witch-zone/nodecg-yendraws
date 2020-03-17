import { ChatMessageToken } from 'nodecg-twitchie'
import { Fragment, FunctionComponent, h } from 'preact'

import CheerToken from './CheerToken'
import EmoteToken from './EmoteToken'
import TextToken from './TextToken'

interface MessageTokensProps {
  tokens: ChatMessageToken[]
}

const MessageTokens: FunctionComponent<MessageTokensProps> = ({ tokens }) => (
  <Fragment>
    {tokens.map(token => {
      if (token.type === 'emote') {
        return <EmoteToken token={token} />
      }

      if (token.type === 'cheer') {
        return <CheerToken token={token} />
      }

      return <TextToken token={token} />
    })}
  </Fragment>
)

export default MessageTokens
