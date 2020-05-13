import { ChatMessageToken } from 'nodecg-twitchie'
import { ComponentType, Fragment, FunctionComponent, h } from 'preact'

import CheerToken, { CheerTokenProps } from './CheerToken'
import EmoteToken, { EmoteTokenProps } from './EmoteToken'

interface MessageTokensProps {
  WrapperComponent?: ComponentType<any>
  EmoteComponent?: ComponentType<EmoteTokenProps>
  CheerComponent?: ComponentType<CheerTokenProps>
  tokens: ChatMessageToken[]
}

const MessageTokens: FunctionComponent<MessageTokensProps> = ({
  WrapperComponent = Fragment,
  EmoteComponent = EmoteToken,
  CheerComponent = CheerToken,
  tokens,
}) => (
  <WrapperComponent>
    {tokens.map(token => {
      if (token.type === 'emote') {
        return <EmoteComponent token={token} />
      }

      if (token.type === 'cheer') {
        return <CheerComponent token={token} />
      }

      return Array.from(token.text)
    })}
  </WrapperComponent>
)

export { MessageTokensProps }
export default MessageTokens
