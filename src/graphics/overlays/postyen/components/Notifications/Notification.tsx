/* global nodecg */

import classnames from 'classnames'
import { NotificationType } from 'nodecg-twitchie-graphics'
import { Fragment, FunctionComponent, h } from 'preact'
import { useEffect, useMemo } from 'preact/hooks'

import usePostyenStore from '../../store'
import { NotificationProps } from '../../../../components/Notifications/Notifications'
import SpeechBubble from '../SpeechBubble'

import classes from './Notifications.module.scss'

const Notification: FunctionComponent<NotificationProps> = ({
  notification,
  visible,
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
    <div className={classes.Notification}>
      <img
        className={classnames(classes.Notification__Friend, {
          [classes['Notification__Friend--visible']]: !!visible,
        })}
        src={friendIcon}
      />

      <SpeechBubble
        className={classnames(classes.Notification__Message, {
          [classes['Notification__Message--visible']]: !!visible,
        })}
      >
        {notification.topic === NotificationType.subscriber && (
          <Fragment>
            <span>{notification.userDisplayName ?? notification.userName}</span>{' '}
            just picked up some stamps!
          </Fragment>
        )}

        {notification.topic === NotificationType.subscriber_gift && (
          <Fragment>
            <span>
              {notification.gifterDisplayName ??
                notification.gifterName ??
                'Someone'}
            </span>{' '}
            just gave{' '}
            {notification.amount && notification.amount > 1
              ? `out ${notification.amount} stamps!`
              : `${
                  notification.recipientDisplayName ??
                  notification.recipientName ??
                  'someone'
                } a stamp!`}
          </Fragment>
        )}

        {notification.topic === NotificationType.follower && (
          <Fragment>
            <span>{notification.userDisplayName ?? notification.userName}</span>{' '}
            picked up a uniform!
          </Fragment>
        )}
      </SpeechBubble>
    </div>
  )
}

export default Notification
