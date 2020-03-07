import { clearNotificationAction, getNextNotification } from 'nodecg-twitchie-graphics'
import { FunctionComponent, h } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import { useDispatch, useSelector } from 'react-redux'

import Notification from './Notification'

const defaultNotificationDuration = 5 * 1000
const defaultDowntimeDuration = 5 * 1000

interface NotificationsProps {
  duration?: number
  downtime?: number
}

const Notifications: FunctionComponent<NotificationsProps> = ({ duration, downtime }) => {
  const [visible, setVisible] = useState(false)
  const notification = useSelector(getNextNotification)

  const dispatch = useDispatch()
  const clearCurrentNotification = useCallback(() => {
    dispatch(clearNotificationAction(notification.id!))
  }, [notification])

  useEffect(() => {
    setVisible(true)

    let clearNotificationTimeout = setTimeout(() => {
      setVisible(false)
      clearNotificationTimeout = setTimeout(clearCurrentNotification, downtime || defaultDowntimeDuration)
    }, duration || defaultNotificationDuration)

    return () => {
      clearTimeout(clearNotificationTimeout)
    }
  }, [notification])

  return <Notification notification={notification} visible={visible} />
}

export default Notifications
