import { ChatTextMessageToken } from 'nodecg-twitchie'
import { Fragment, FunctionComponent, h } from 'preact'

interface TextTokenProps {
  token: ChatTextMessageToken
}

const TextToken: FunctionComponent<TextTokenProps> = ({ token }) => <Fragment>{token.text}</Fragment>

export default TextToken
