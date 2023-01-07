import context from '../../context'
import addKnownUser from './add-known-user'

context.twitchie.on('chat.message', ({ message }) => {
  addKnownUser(message.user.username)
})
