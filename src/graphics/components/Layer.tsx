import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'

import classes from './Layer.module.scss'
import { CSSProperties } from 'preact/compat'

interface LayerProps {
  style?: CSSProperties
  className?: string
}

const Layer: FunctionComponent<LayerProps> = ({
  style,
  className,
  children,
}) => (
  <div style={style} className={classnames(classes.Layer, className)}>
    {children}
  </div>
)

export default Layer
