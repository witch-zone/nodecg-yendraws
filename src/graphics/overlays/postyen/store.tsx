import create from 'zustand'

export enum PostyenMode {
  DIGITAL = 'digital',
  TRADITIONAL = 'traditional',
  GAMES = 'games',
}

export interface PostyenStore {
  knownUsers: Record<string, string>
  mode: PostyenMode
}

const usePostyenStore = create<PostyenStore>(() => ({
  knownUsers: {},
  mode: PostyenMode.DIGITAL,
}))

const knownUserReplicant = nodecg.Replicant('users.known', 'nodecg-twitchie')
const modeReplicant = nodecg.Replicant('postyen.mode', 'nodecg-yendraws')

knownUserReplicant.on('change', (newUsers: Record<string, string>) => {
  usePostyenStore.setState({
    knownUsers: { ...newUsers },
  })
})

modeReplicant.on('change', (newMode: PostyenMode) => {
  usePostyenStore.setState({
    mode: newMode,
  })
})

export default usePostyenStore
