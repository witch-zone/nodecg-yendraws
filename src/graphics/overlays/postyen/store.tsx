import create from 'zustand'

export interface PixieStore {
  knownUsers: Record<string, string>
}

const usePostyenStore = create<PixieStore>(() => ({
  knownUsers: {},
}))

const knownUserReplicant = nodecg.Replicant('users.known', 'nodecg-twitchie')

knownUserReplicant.on('change', (newUsers: Record<string, string>) => {
  usePostyenStore.setState({
    knownUsers: { ...newUsers },
  })
})

export default usePostyenStore
