import { type ChatCheerMessageToken } from 'nodecg-twitchie'
import { h, type FunctionComponent } from 'preact'

import classes from './CheerToken.module.scss'

interface CheerTokenProps {
  token: ChatCheerMessageToken
}

const CheerToken: FunctionComponent<CheerTokenProps> = ({ token }) => (
  <span
    className={classes.Cheer}
    style={{ '--cheer-color': token.displayInfo.color }}
  >
    <img className={classes.Cheer__Cheermote} src={token.displayInfo.url} />
    {token.amount}
  </span>
)

export { CheerTokenProps }
export default CheerToken
