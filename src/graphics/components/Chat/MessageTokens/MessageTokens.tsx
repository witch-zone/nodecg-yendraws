import { ChatEmoteMessageToken, ChatMessageToken } from 'nodecg-twitchie'
import { ComponentType, Fragment, FunctionComponent, h } from 'preact'
import { useMemo } from 'preact/hooks'

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
}) => {
  const weGottaGoJumbo = useMemo(() => {
    if (tokens.length > 5) {
      return false
    }

    return tokens
      .filter((token) => token.type !== 'text' || token.text !== ' ')
      .every((token) => token.type === 'emote')
  }, [tokens])

  if (weGottaGoJumbo) {
    return (
      <WrapperComponent>
        <div className="o-jumbomoji">
          {tokens.map((token) =>
            token.type === 'emote' ? (
              <EmoteComponent token={token as ChatEmoteMessageToken} />
            ) : null,
          )}
        </div>
      </WrapperComponent>
    )
  }

  return (
    <WrapperComponent>
      {tokens.map((token) => {
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
}
export { MessageTokensProps }
export default MessageTokens
