/* global nodecg */

import classnames from 'classnames'
import { NotificationType } from 'nodecg-twitchie-graphics'
import { Fragment, FunctionComponent, h } from 'preact'
import { useEffect } from 'preact/hooks'

import { NotificationProps } from '../../../../components/Notifications/Notifications'
import SpeechBubble from '../SpeechBubble'

import lemonFriend from '../../../../assets/images/postyen/friends/lemon.png'

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
      <img className="c-notification__friend" src={lemonFriend} />

      <SpeechBubble className="c-notification__message">
        {notification.topic === NotificationType.subscriber &&
          (notification.months > 1 ? (
            <Fragment>
              <span>{notification.name}</span> just resubscribed! That&apos;s{' '}
              {notification.months} months!
            </Fragment>
          ) : (
            <Fragment>
              <span>{notification.name}</span> just subscribed!
            </Fragment>
          ))}

        {notification.topic === NotificationType.subscriber_gift && (
          <Fragment>
            <span>{notification.name}</span> just got a gift from{' '}
            {notification.gifter ?? 'someone'}!
          </Fragment>
        )}

        {notification.topic === NotificationType.community_gift && (
          <Fragment>
            <span>{notification.gifter ?? 'Someone'}</span> just gave out{' '}
            {notification.count} gifts! Wow!
          </Fragment>
        )}

        {notification.topic === NotificationType.follower && (
          <Fragment>
            <span>{notification.from_name}</span> just followed!
          </Fragment>
        )}
      </SpeechBubble>
    </div>
  )
}

export default Notification
