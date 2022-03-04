/* global nodecg */

import classnames from 'classnames'
import {
  Notification as TwitchieNotification,
  NotificationType,
} from 'nodecg-twitchie-graphics'
import { FunctionComponent, h } from 'preact'
import { useEffect } from 'preact/hooks'

import bat from '../../../assets/images/bat.gif'

interface NotificationProps {
  notification: TwitchieNotification
  visible: boolean
  className?: string
}

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

      {notification.topic === NotificationType.subscriber &&
        (notification.months > 1 ? (
          <div
            className="c-notification__message"
            data-shadow={`${notification.name} just resubscribed! That's ${notification.months} months!`}
          >
            <span>{notification.name}</span> just resubscribed! That&apos;s{' '}
            {notification.months} months!
          </div>
        ) : (
          <div
            className="c-notification__message"
            data-shadow={`${notification.name} just subscribed!`}
          >
            <span>{notification.name}</span> just subscribed!
          </div>
        ))}

      {notification.topic === NotificationType.subscriber_gift && (
        <div
          className="c-notification__message"
          data-shadow={`${notification.name} just got a gift from ${
            notification.gifter ?? 'someone'
          }!`}
        >
          <span>{notification.name}</span> just got a gift from{' '}
          {notification.gifter ?? 'someone'}!
        </div>
      )}

      {notification.topic === NotificationType.community_gift && (
        <div
          className="c-notification__message"
          data-shadow={`${notification.gifter ?? 'Someone'} just gave out ${
            notification.count
          } gifts! Wow!`}
        >
          <span>{notification.gifter ?? 'Someone'}</span> just gave out{' '}
          {notification.count} gifts! Wow!
        </div>
      )}

      {notification.topic === NotificationType.follower && (
        <div
          className="c-notification__message"
          data-shadow={`${notification.from_name} just followed!`}
        >
          <span>{notification.from_name}</span> just followed!
        </div>
      )}
    </div>
  )
}

export default Notification
