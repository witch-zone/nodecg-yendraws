const context = require('./context')

module.exports = async nodecg => {
  context.nodecg = nodecg
  context.twitchie = await nodecg.extensions['nodecg-twitchie']

  require('./modules/commands')
}
