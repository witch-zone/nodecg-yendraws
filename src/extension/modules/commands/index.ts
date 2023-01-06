import context from '../../context'

interface ChatCommandPayload {
  command: string
  target: string
}

context.nodecg.listenFor(
  'chat.command',
  ({ command, target }: ChatCommandPayload) => {
    const channel = context.twitchie.replicants.channel.id.value

    if (!context.twitchie.client || !channel) {
      return
    }

    context.twitchie.client.say(
      `#${channel.toLowerCase()}`,
      target ? `${command} ${target}` : command,
    )
  },
)
