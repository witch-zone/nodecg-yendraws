import { h } from 'preact'
import classnames from 'classnames'

const Scene = ({
  isVisible,
  className,
  children,
}) => (
  <section
    className={classnames(
      'c-scene',
      className, {
        'is-visible': isVisible,
      },
    )}
  >
    {children}
  </section>
)

export default Scene
