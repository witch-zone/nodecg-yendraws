const EventEmitter = require('events')

const createReplicants = require('./replicants')

let nodecgInstance
let replicants
let events

module.exports = {
  get nodecg() {
    return nodecgInstance
  },
  set nodecg(instance) {
    nodecgInstance = instance
    replicants = createReplicants(nodecgInstance)
    events = new EventEmitter()
  },

  get twitchie() {
    return nodecgInstance.extensions['nodecg-twitchie']
  },
  set twitchie(instance) {
    throw new Error('Twitchie is created when NodeCG starts up')
  },

  get log() {
    return nodecgInstance ? nodecgInstance.log : console
  },
  set log(instance) {
    throw new Error('Logger is created by NodeCG and cannot be overwritten')
  },

  get events() {
    return events
  },
  set events(instance) {
    throw new Error('Emitter is initialised when nodecg instance is set')
  },

  get replicants() {
    return replicants
  },
  set replicants(instance) {
    throw new Error('Replicants are initialised when nodecg instance is set')
  },
}
