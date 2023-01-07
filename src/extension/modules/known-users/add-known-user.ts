import NodeCache from 'node-cache'
import batcher from 'batcher-js'

import context from '../../context'

const knownUserCache = new NodeCache()
const knownUserReplicant = context.nodecg.Replicant<Record<string, string>>(
  'users.known',
  'nodecg-twitchie',
  { defaultValue: {}, persistent: true },
)

const addKnownUser = batcher(
  async (usernames: string[]) => {
    /* users can change the casing of their usernames in twitch
     * chat--we need to standardise names here as our cache
     * is case-sensitive */
    const normalizedUsernames = usernames.map((username) =>
      username.toLowerCase(),
    )

    context.log.debug('Looking up users...', normalizedUsernames)

    const unknownUsernames = normalizedUsernames.filter(
      (username) => !knownUserCache.has(username),
    )

    if (unknownUsernames.length === 0) {
      return
    }

    const users = await context.twitchie.api?.users.getUsersByNames(
      unknownUsernames,
    )

    const updatedReplicantValue = { ...knownUserReplicant.value }

    users?.forEach((user) => {
      knownUserCache.set(user.name, user.profilePictureUrl)
      updatedReplicantValue[user.name.toLowerCase()] = user.profilePictureUrl
    })

    knownUserReplicant.value = updatedReplicantValue
  },
  {
    interval: 0,
    maximum: 50,
  },
)

export default addKnownUser
