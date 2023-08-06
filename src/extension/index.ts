import type NodeCG from '@nodecg/types'

import context from './context'

module.exports = async (nodecg: NodeCG.ServerAPI) => {
  context.nodecg = nodecg

  require('./modules/commands')
  require('./modules/known-users')
}
