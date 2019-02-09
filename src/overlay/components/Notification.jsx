import { h } from 'preact'
import classnames from 'classnames'

import bat from '../../assets/images/bat.gif'

const Notification = ({
  notification,
  visible,
  className,
}) => (
  <div
    className={classnames(
      'c-notification',
      className,
      {
        'c-notification--visible': !!visible,
      },
    )}
  >
    <img src={bat} alt="" className="c-notification__bat" />
    a notification
  </div>
)

export default Notification
