import classnames from 'classnames'
import { getBRB } from 'nodecg-twitchie-graphics'
import { FunctionComponent, h } from 'preact'
import { useMemo } from 'preact/hooks'
import { useSelector } from 'react-redux'

interface SceneProps {
  showWhenAway?: boolean
  hideWhenAway?: boolean
  className?: string
}

const Scene: FunctionComponent<SceneProps> = ({ showWhenAway, hideWhenAway, className, children }) => {
  const brb = useSelector(getBRB)

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
