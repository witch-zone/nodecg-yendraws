const EventEmitter = require('events')

const createReplicants = require('./replicants')

let nodecgInstance
let replicants
let events
let twitchie

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
    return twitchie
  },
  set twitchie(instance) {
    twitchie = instance
  },

  get log() {
    return nodecgInstance ? nodecgInstance.log : console
  },
  set log(_) {
    throw new Error('Logger is created by NodeCG and cannot be overwritten')
  },

  get events() {
    return events
  },
  set events(_) {
    throw new Error('Emitter is initialised when nodecg instance is set')
  },

  get replicants() {
    return replicants
  },
  set replicants(_) {
    throw new Error('Replicants are initialised when nodecg instance is set')
  },
}
