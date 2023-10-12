import { ChatEmoteMessageToken, ChatMessageToken } from 'nodecg-twitchie'
import { ComponentType, FunctionComponent, h } from 'preact'

import { EmoteTokenProps } from './EmoteToken'

import classes from './JumbomotesToken.module.scss'

interface JumbomoteTokenProps {
  tokens: ChatMessageToken[]
  EmoteComponent: ComponentType<EmoteTokenProps>
}

const isEmoteToken = (
  token: ChatMessageToken,
): token is ChatEmoteMessageToken => token.type === 'emote'

const JumbomotesToken: FunctionComponent<JumbomoteTokenProps> = ({
  tokens,
  EmoteComponent,
}) => (
  <div className={classes.Jumbomotes}>
    {tokens.filter(isEmoteToken).map((token) => (
      <EmoteComponent token={token} className={classes.Jumbomotes__Emote} />
    ))}
  </div>
)

export default JumbomotesToken
