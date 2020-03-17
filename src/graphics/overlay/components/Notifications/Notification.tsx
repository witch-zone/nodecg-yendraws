import classnames from 'classnames'
import { Notification } from 'nodecg-twitchie-graphics'
import { FunctionComponent, h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

import bat from '../../../assets/images/bat.gif'
import magic from '../../../assets/sounds/magic-notification.flac'

interface NotificationProps {
  notification: Notification
  visible: boolean
  className?: string
}

const Notification: FunctionComponent<NotificationProps> = ({ notification, visible, className }) => {
  const audio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    audio.current.pause()
    audio.current.currentTime = 0
    audio.current.play()
  }, [visible])

  return (
    <div
      className={classnames('c-notification', className, {
        'c-notification--visible': !!visible,
      })}
    >
      <audio ref={audio} volume="0.6" src={magic} />

      <img src={bat} alt="" className="c-notification__bat" />

      {notification.topic === 'subscriber' &&
        (notification.scale ? (
          <div
            className="c-notification__message"
            data-shadow={`${notification.user} just resubscribed! That's ${notification.scale} months!`}
          >
            <span>{notification.user}</span> just resubscribed! That&apos;s {notification.scale} months!
          </div>
        ) : (
          <div className="c-notification__message" data-shadow={`${notification.user} just subscribed!`}>
            <span>{notification.user}</span> just subscribed!
          </div>
        ))}

      {notification.topic === 'follower' && (
        <div className="c-notification__message" data-shadow={`${notification.user} just followed!`}>
          <span>{notification.user}</span> just followed!
        </div>
      )}
    </div>
  )
}

export default Notification
