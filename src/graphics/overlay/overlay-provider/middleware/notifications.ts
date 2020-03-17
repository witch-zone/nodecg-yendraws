import { getNotificationAction, Notification, QUEUE_NOTIFICATION } from 'nodecg-twitchie-graphics'
import { AnyAction, Middleware } from 'redux'

interface NotificationAction {
  type: string
  payload: Notification
}

const isNotificationAction = ({ type }: AnyAction) => type === QUEUE_NOTIFICATION

const notificationMiddleware: Middleware = () => next => (action: AnyAction | NotificationAction) => {
  if (!isNotificationAction(action)) {
    return next(action)
  }

  const { payload } = action as NotificationAction
  const chatAction = getNotificationAction(payload)

  return next(chatAction)
}

export default notificationMiddleware
