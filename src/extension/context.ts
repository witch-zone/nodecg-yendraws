import type NodeCG from '@nodecg/types'
import { TwitchieExtension } from 'nodecg-twitchie'

let nodecgInstance: NodeCG.ServerAPI

export default {
  get nodecg() {
    return nodecgInstance
  },

  set nodecg(instance) {
    nodecgInstance = instance
  },

  get log() {
    return nodecgInstance ? nodecgInstance.log : console
  },

  set log(_) {
    throw new Error('Logger is created by NodeCG and cannot be overwritten')
  },

  get twitchie() {
    return nodecgInstance.extensions[
      'nodecg-twitchie'
    ] as unknown as TwitchieExtension
  },

  set twitchie(_) {
    throw new Error('Twitchie is created by NodeCG and cannot be overwritten')
  },
}
