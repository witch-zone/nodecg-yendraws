import { FunctionComponent, h } from 'preact'

import { MessageProps } from '../../../components/Chat/ChatItem'

import classes from './Message.module.scss'

import mod from '../../../assets/badges/mod.png'
import yen from '../../../assets/badges/yen.png'

import sub0 from '../../../assets/badges/subscriber/0.png'
import sub12 from '../../../assets/badges/subscriber/12.png'
import sub3 from '../../../assets/badges/subscriber/3.png'
import sub6 from '../../../assets/badges/subscriber/6.png'

interface UserBadgesProps {
  badges: Record<string, string>
}

const UserBadges: FunctionComponent<UserBadgesProps> = ({ badges = {} }) => {
  if (badges.broadcaster) {
    return <img src={yen} alt="yen" className={classes.Badge} />
  }

  if (badges.moderator) {
    return <img src={mod} alt="mod" className={classes.Badge} />
  }

  if (badges.founder) {
    return <img src={sub12} alt="sub12" className={classes.Badge} />
  }

  if (badges.subscriber) {
    const months = parseInt(badges.subscriber, 10)

    if (months >= 12) {
      return <img src={sub12} alt="sub12" className={classes.Badge} />
    }

    if (months >= 6) {
      return <img src={sub6} alt="sub6" className={classes.Badge} />
    }

    if (months >= 3) {
      return <img src={sub3} alt="sub3" className={classes.Badge} />
    }

    return <img src={sub0} alt="sub0" className={classes.Badge} />
  }

  return <span className={classes.Badge}>&hearts;</span>
}

const Message: FunctionComponent<MessageProps> = ({ item, user, message }) => (
  <div className={classes.Message}>
    <div className={classes.Message__Header}>
      <div className={classes.Message__Badge}>
        <UserBadges badges={item.user.badges} />
      </div>

      <div className={classes.Message__User}>{user}</div>
    </div>

    <div className={classes.Message__Text}>{message}</div>
  </div>
)

export default Message
