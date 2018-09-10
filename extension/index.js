const context = require('./context')

module.exports = (nodecg) => {
  context.nodecg = nodecg

  require('./modules/commands')
}
