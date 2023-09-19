import create from 'zustand'

import { createRandomArrayPicker } from '../../utils/array'

import friendLemon2 from './assets/friends/friend-lemon2.png'
import friendLemon3 from './assets/friends/friend-lemon3.png'
import friendEel2 from './assets/friends/friend-eel2.png'
import friendJelly2 from './assets/friends/friend-jelly2.png'

export enum PostyenMode {
  DIGITAL = 'digital',
  TRADITIONAL = 'traditional',
  GAMES = 'games',
}

export interface PostyenStore {
  knownUsers: Record<string, string>
  mode: PostyenMode
  friends: Generator<string, void>
}

const usePostyenStore = create<PostyenStore>(() => ({
  knownUsers: {},
  mode: PostyenMode.DIGITAL,
  friends: createRandomArrayPicker([
    friendLemon2,
    friendLemon3,
    friendEel2,
    friendJelly2,
  ]),
}))

const knownUserReplicant = nodecg.Replicant<Record<string, string>>(
  'users.known',
  'nodecg-twitchie',
)
const modeReplicant = nodecg.Replicant<PostyenMode>(
  'postyen.mode',
  'nodecg-yendraws',
)

knownUserReplicant.on('change', (newUsers) => {
  usePostyenStore.setState({
    knownUsers: newUsers ?? {},
  })
})

modeReplicant.on('change', (newMode) => {
  usePostyenStore.setState({
    mode: newMode ?? PostyenMode.DIGITAL,
  })
})

export default usePostyenStore
