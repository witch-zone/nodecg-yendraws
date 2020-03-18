import { ChatTextMessageToken } from 'nodecg-twitchie'
import { FunctionComponent, h } from 'preact'

import Twemoji from '../../Twemoji'

interface TextTokenProps {
  token: ChatTextMessageToken
}

const TextToken: FunctionComponent<TextTokenProps> = ({ token }) => <Twemoji message={token.text} />

export default TextToken
