import { NotificationType } from 'nodecg-twitchie-graphics'
import { FunctionComponent, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import useStore from '../../../store'

import Notification from './Notification'

const defaultNotificationDuration = 5 * 1000
const defaultDowntimeDuration = 2 * 1000

interface NotificationsProps {
  duration?: number
  downtime?: number
}

const Notifications: FunctionComponent<NotificationsProps> = ({
  duration,
  downtime,
}) => {
  const [visible, setVisible] = useState(false)

  const notification = useStore((state) =>
    state.notifications.find(
      (item) => item.topic !== NotificationType.new_chatter,
    ),
  )

  const removeNotificationById = useStore(
    (state) => state.removeNotificationById,
  )

  useEffect(() => {
    if (!notification) {
      return
    }

    setVisible(true)

    let clearNotificationTimeout = setTimeout(() => {
      setVisible(false)
      clearNotificationTimeout = setTimeout(
        () => removeNotificationById(notification.id!),
        downtime || defaultDowntimeDuration,
      )
    }, duration || defaultNotificationDuration)

    return () => {
      clearTimeout(clearNotificationTimeout)
    }
  }, [notification])

  return notification ? (
    <Notification notification={notification} visible={visible} />
  ) : null
}

export default Notifications
