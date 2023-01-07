import { NodeCG } from '../../../../types/server'

import context from './context'

module.exports = async (nodecg: NodeCG) => {
  context.nodecg = nodecg

  require('./modules/commands')
  require('./modules/known-users')
}
