/* global nodecg */

import classnames from 'classnames'
import { NotificationType } from 'nodecg-twitchie-graphics'
import { Fragment, FunctionComponent, h } from 'preact'
import { useEffect, useMemo } from 'preact/hooks'

import usePostyenStore from '../../store'
import { NotificationProps } from '../../../../components/Notifications/Notifications'
import SpeechBubble from '../SpeechBubble'

const Notification: FunctionComponent<NotificationProps> = ({
  notification,
  visible,
  className,
}) => {
  const randomFriendIcons = usePostyenStore((store) => store.friends)

  const friendIcon = useMemo(() => {
    const next = randomFriendIcons.next()
    return next.done !== true ? next.value : undefined
  }, [randomFriendIcons, notification.id])

  useEffect(() => {
    nodecg.playSound('notification')
  }, [notification])

  return (
    <div
      className={classnames('c-notification', className, {
        'c-notification--visible': !!visible,
      })}
    >
      <img className="c-notification__friend" src={friendIcon} />

      <SpeechBubble className="c-notification__message">
        {notification.topic === NotificationType.subscriber && (
          <Fragment>
            <span>{notification.name}</span> just picked up some stamps!
          </Fragment>
        )}

        {notification.topic === NotificationType.subscriber_gift && (
          <Fragment>
            <span>{notification.name}</span> just got some stamps from{' '}
            {notification.gifter ?? 'someone'}!
          </Fragment>
        )}

        {notification.topic === NotificationType.community_gift && (
          <Fragment>
            <span>{notification.gifter ?? 'Someone'}</span> just gave out{' '}
            {notification.count} stamps!
          </Fragment>
        )}

        {notification.topic === NotificationType.follower && (
          <Fragment>
            <span>{notification.from_name}</span> picked up a uniform!
          </Fragment>
        )}
      </SpeechBubble>
    </div>
  )
}

export default Notification
