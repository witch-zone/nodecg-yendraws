import { h } from 'preact'
import classnames from 'classnames'

const Layer = ({
  className,
  children,
}) => (
  <div
    className={classnames(
      'c-layer',
      className,
    )}
  >
    {children}
  </div>
)

export default Layer
