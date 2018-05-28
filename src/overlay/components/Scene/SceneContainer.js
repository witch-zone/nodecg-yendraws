import { compose, withProps, setDisplayName } from 'recompose'
import { connect } from 'preact-redux'

import { getBRB } from 'nodecg-twitchie-graphics/overlay-provider/selectors/brb'

import Scene from './Scene'

const getVisibility = (isAway, showWhenAway, hideWhenAway) => {
  if (showWhenAway) {
    return isAway
  }

  if (hideWhenAway) {
    return !isAway
  }

  return true
}

const mapStateToProps = (state) => {
  const brb = getBRB(state)

  return {
    isAway: brb.away,
    message: brb.message,
  }
}

const createProps = ({
  isAway,
  hideWhenAway,
  showWhenAway,
}) => ({
  isVisible: getVisibility(isAway, showWhenAway, hideWhenAway),
})

export default compose(
  setDisplayName('SceneContainer'),
  connect(mapStateToProps),
  withProps(createProps),
)(Scene)
