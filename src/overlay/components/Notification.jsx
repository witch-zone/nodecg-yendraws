import { h } from 'preact'
import classnames from 'classnames'

import bat from '../../assets/images/bat.gif'

const Notification = ({
  notification,
  visible,
  className,
}) => (
  <div
    className={classnames(
      'c-notification',
      className,
      {
        'c-notification--visible': !!visible,
      },
    )}
  >
    <img src={bat} alt="" className="c-notification__bat" />

    {console.log(notification)}

    {notification.topic === 'subscriber' && (
      notification.scale ? (
        <div className="c-notification__message" data-shadow={`${notification.user} just resubscribed! That's ${notification.scale} months!`}>
          <span>{notification.user}</span> just resubscribed! That&apos;s {notification.scale} months!
        </div>
      ) : (
        <div className="c-notification__message" data-shadow={`${notification.user} just subscribed!`}>
          <span>{notification.user}</span> just subscribed!
        </div>
      )
    )}

    {notification.topic === 'follower' && (
      <div className="c-notification__message" data-shadow={`${notification.user} just followed!`}>
        <span>{notification.user}</span> just followed!
      </div>
    )}
  </div>
)

export default Notification
