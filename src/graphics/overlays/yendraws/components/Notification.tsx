import classnames from 'classnames'
import { NotificationType } from 'nodecg-twitchie-graphics'
import { FunctionComponent, h } from 'preact'
import { useEffect } from 'preact/hooks'

import { NotificationProps } from '../../../components/Notifications/Notifications'

import bat from '../assets/bat.gif'

const Notification: FunctionComponent<NotificationProps> = ({
  notification,
  visible,
  className,
}) => {
  useEffect(() => {
    nodecg.playSound('notification')
  }, [notification])

  return (
    <div
      className={classnames('c-notification', className, {
        'c-notification--visible': !!visible,
      })}
    >
      <img src={bat} alt="" className="c-notification__bat" />

      {notification.topic === NotificationType.subscriber && (
        <div
          className="c-notification__message"
          data-shadow={`${
            notification.userDisplayName ?? notification.userName
          } just subscribed!`}
        >
          <span>{notification.userDisplayName ?? notification.userName}</span>{' '}
          just subscribed!
        </div>
      )}

      {notification.topic === NotificationType.subscriber_gift &&
        notification.amount === 1 && (
          <div
            className="c-notification__message"
            data-shadow={`${
              notification.recipientDisplayName ?? notification.recipientName
            } just got a gift from ${
              notification.gifterDisplayName ??
              notification.gifterName ??
              'someone'
            }}!`}
          >
            <span>
              {notification.recipientDisplayName ?? notification.recipientName}
            </span>{' '}
            just got a gift from{' '}
            {notification.gifterDisplayName ??
              notification.gifterName ??
              'someone'}
            !
          </div>
        )}

      {notification.topic === NotificationType.subscriber_gift &&
        Number(notification.amount) > 1 && (
          <div
            className="c-notification__message"
            data-shadow={`${
              notification.gifterDisplayName ??
              notification.gifterName ??
              'Someone'
            } just gave out ${notification.amount} gifts! Wow!`}
          >
            <span>
              {' '}
              {notification.gifterDisplayName ??
                notification.gifterName ??
                'Someone'}
            </span>{' '}
            just gave out {notification.amount} gifts! Wow!
          </div>
        )}

      {notification.topic === NotificationType.follower && (
        <div
          className="c-notification__message"
          data-shadow={`${
            notification.userDisplayName ?? notification.userName
          } just followed!`}
        >
          <span>{notification.userDisplayName ?? notification.userName}</span>{' '}
          just followed!
        </div>
      )}
    </div>
  )
}

export default Notification
