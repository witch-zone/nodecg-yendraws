import { FunctionComponent, h } from 'preact'

import Layer from '../../../../components/Layer'
import NotificationFeed from '../../../../components/Notifications'

import Notification from './Notification'

import classes from './Notifications.module.scss'

const Notifications: FunctionComponent = () => (
  <Layer className={classes.Notifications}>
    <NotificationFeed notificationComponent={Notification} />
  </Layer>
)

export default Notifications
