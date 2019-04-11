import { h, Component } from 'preact'
import classnames from 'classnames'

import magic from '../../assets/sounds/magic-notification.flac'
import bat from '../../assets/images/bat.gif'

class Notification extends Component {
  componentDidMount() {
    this.playAudio()
  }

  componentDidUpdate() {
    this.playAudio()
  }

  playAudio() {
    const {
      visible,
    } = this.props

    if (!visible) {
      return
    }

    this.$audio.pause()
    this.$audio.currentTime = 0
    this.$audio.play()
  }

  render() {
    const {
      notification,
      visible,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          'c-notification',
          className,
          {
            'c-notification--visible': !!visible,
          },
        )}
      >
        <audio
          ref={(audioRef) => { this.$audio = audioRef}}
          volume="0.6"
          src={magic}
        />

        <img src={bat} alt="" className="c-notification__bat" />

        {notification.topic === 'subscriber' && (
          notification.scale ? (
            <div className="c-notification__message" data-shadow={`${notification.user} just resubscribed! That's ${notification.scale} months!`}>
              <span>{notification.user}</span> just resubscribed! That&apos;s {notification.scale} months!
            </div>
          ) : (
            <div className="c-notification__message" data-shadow={`${notification.user} just subscribed!`}>
              <span>{notification.user}</span> just subscribed!
            </div>
          )
        )}

        {notification.topic === 'follower' && (
          <div className="c-notification__message" data-shadow={`${notification.user} just followed!`}>
            <span>{notification.user}</span> just followed!
          </div>
        )}
      </div>
    )
  }
}

export default Notification
