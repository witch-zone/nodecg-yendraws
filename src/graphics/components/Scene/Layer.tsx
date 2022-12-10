import { h, FunctionComponent } from 'preact'
import classnames from 'classnames'

interface LayerProps {
  className?: string
}

const Layer: FunctionComponent<LayerProps> = ({ className, children }) => (
  <div className={classnames('o-layer', className)}>{children}</div>
)

export default Layer
