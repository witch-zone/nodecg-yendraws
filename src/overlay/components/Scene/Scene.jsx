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
        'c-scene--is-visible': isVisible,
      },
    )}
  >
    {children}
  </section>
)

export default Scene
