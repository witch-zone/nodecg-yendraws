import { ChatMessage } from 'nodecg-twitchie-graphics'
import { ComponentChildren, FunctionComponent, h } from 'preact'

import mod from '../../../assets/badges/mod.png'
import yen from '../../../assets/badges/yen.png'

import sub0 from '../../../assets/badges/subscriber/0.png'
import sub12 from '../../../assets/badges/subscriber/12.png'
import sub3 from '../../../assets/badges/subscriber/3.png'
import sub6 from '../../../assets/badges/subscriber/6.png'

interface MessageProps {
  item: ChatMessage
  user: ComponentChildren
  message: ComponentChildren
}

interface UserBadgesProps {
  badges: Record<string, string>
}

const UserBadges: FunctionComponent<UserBadgesProps> = ({ badges = {} }) => {
  if (badges.broadcaster) {
    return <img src={yen} alt="yen" className="o-emote o-emote--flush" />
  }

  if (badges.moderator) {
    return <img src={mod} alt="mod" className="o-emote o-emote--flush" />
  }

  if (badges.founder) {
    return <img src={sub12} alt="sub12" className="o-emote o-emote--flush" />
  }

  if (badges.subscriber) {
    const months = parseInt(badges.subscriber, 10)

    if (months >= 12) {
      return <img src={sub12} alt="sub12" className="o-emote o-emote--flush" />
    }

    if (months >= 6) {
      return <img src={sub6} alt="sub6" className="o-emote o-emote--flush" />
    }

    if (months >= 3) {
      return <img src={sub3} alt="sub3" className="o-emote o-emote--flush" />
    }

    return <img src={sub0} alt="sub0" className="o-emote o-emote--flush" />
  }

  return null
}

const Message: FunctionComponent<MessageProps> = ({ item, user, message }) => (
  <div className="c-chat-item c-chat-message">
    <div className="c-chat-message__header">
      <div className="c-chat-message__badge">
        <UserBadges badges={item.user.badges} />
      </div>

      <div className="c-chat-message__separator">
        <span
          className="o-emote"
          style={{ color: item.user.color || 'inherit' }}
        >
          &hearts;
        </span>
      </div>

      <div className="c-chat-message__user">{user}</div>
    </div>

    <div className="c-chat-message__message">{message}</div>
  </div>
)

export { MessageProps }
export default Message
