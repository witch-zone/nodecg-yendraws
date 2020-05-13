import { ChatTextMessageToken } from 'nodecg-twitchie'
import { FunctionComponent, h } from 'preact'

import Twemoji from '../../Twemoji'

interface TextTokenProps {
  token: ChatTextMessageToken
}

const TextToken: FunctionComponent<TextTokenProps> = ({ token }) => <Twemoji>{token.text}</Twemoji>

export { TextTokenProps }
export default TextToken
