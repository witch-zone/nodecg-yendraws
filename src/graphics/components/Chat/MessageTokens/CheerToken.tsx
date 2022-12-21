import { type ChatCheerMessageToken } from 'nodecg-twitchie'
import { h, type FunctionComponent } from 'preact'

interface CheerTokenProps {
  token: ChatCheerMessageToken
}

const CheerToken: FunctionComponent<CheerTokenProps> = ({ token }) => (
  <span
    className="o-cheer"
    style={{ '--cheer-color': token.displayInfo.color }}
  >
    <img className="o-cheer__cheermote" src={token.displayInfo.url} />
    <span className="o-cheer__amount">{token.amount}</span>
  </span>
)

export { CheerTokenProps }
export default CheerToken
