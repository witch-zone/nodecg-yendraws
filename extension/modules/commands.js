const { nodecg, twitchie } = require('../context')
const getChatChannelFor = require('../utils/getChatChannelFor')

const channelId = twitchie.replicants.channel.id

nodecg.listenFor('chat.command', payload => {
  const { command, target } = payload

  const channel = getChatChannelFor(channelId.value)

  const message = target ? `${command} ${target}` : command

  twitchie.client.say(channel, message)
})
