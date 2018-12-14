import { h } from 'preact'
import classnames from 'classnames'

const Scene = ({
  isVisible,
  className,
  children,
}) => (
  <section
    className={classnames(
      'o-scene',
      className, {
        'o-scene--is-visible': isVisible,
      },
    )}
  >
    {children}
  </section>
)

export default Scene
