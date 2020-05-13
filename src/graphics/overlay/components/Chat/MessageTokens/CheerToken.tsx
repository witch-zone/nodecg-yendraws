import { ChatCheerMessageToken } from 'nodecg-twitchie'
import { Fragment, FunctionComponent, h } from 'preact'

interface CheerTokenProps {
  token: ChatCheerMessageToken
}

const CheerToken: FunctionComponent<CheerTokenProps> = ({ token }) => <Fragment>{token.amount}</Fragment>

export { CheerTokenProps }
export default CheerToken
