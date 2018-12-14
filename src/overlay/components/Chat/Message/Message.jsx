import { h } from 'preact'
import classnames from 'classnames'

import Emote from './Emote'
import Cheer from './Cheer'

const Message = ({
  user: {
    username,
    badges = [],
  } = {},
  message: {
    tokens = [],
  } = {},
  topic,
  className,
}) => (
  <div
    className={classnames(
      'c-message',
      className,
      {
        'c-message--notification': !!topic,
        [`c-message--${topic}`]: !!topic,
      },
    )}
  >
    <header>
      <div className="c-message__title">
        {username}
      </div>

      {topic && (
        <div className="c-message_subtitle">
          {topic === 'follower' && (
            <span>
              just followed!
            </span>
          )}

          {topic === 'subscriber' && (
            <span>
              just subscribed!
            </span>
          )}
        </div>
      )}

      {Object.keys(badges).map((badge) => (
        <figure
          key={badge}
          className={classnames(
            'c-message__badge',
            `c-message__badge--${badge}`,
          )}
        />
      ))}
    </header>

    {tokens.length > 0 && (
      <div className="c-message__body">
        {tokens.map(({ type, content }) => {
          if (type === 'cheer') {
            return (
              <Cheer
                name={content.key}
                bits={content.bits}
              />
            )
          }

          if (type === 'emote') {
            return (
              <Emote
                name={content.key}
                title={content.title}
              />
            )
          }

          return content
        })}
      </div>
    )}
  </div>
)

export default Message
