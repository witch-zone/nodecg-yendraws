import { FunctionComponent, h } from 'preact'

import Layer from '../../../../components/Layer'
import NotificationFeed from '../../../../components/Notifications'

import Notification from './Notification'

const Notifications: FunctionComponent = () => (
  <Layer className="c-notifications">
    <NotificationFeed notificationComponent={Notification} />
  </Layer>
)

export default Notifications
