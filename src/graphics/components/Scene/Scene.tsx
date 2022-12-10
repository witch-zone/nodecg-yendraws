import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'
import { useMemo } from 'preact/hooks'

import useStore from '../../store'

interface SceneProps {
  showWhenAway?: boolean
  hideWhenAway?: boolean
  className?: string
}

const Scene: FunctionComponent<SceneProps> = ({
  showWhenAway,
  hideWhenAway,
  className,
  children,
}) => {
  const brb = useStore((state) => state.brb)

  const isVisible = useMemo(() => {
    if (showWhenAway) {
      return brb.away
    }

    if (hideWhenAway) {
      return !brb.away
    }

    return true
  }, [brb])

  return (
    <section
      className={classnames('o-scene', className, {
        'o-scene--is-visible': isVisible,
      })}
    >
      {children}
    </section>
  )
}

export default Scene
