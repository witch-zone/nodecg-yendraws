const { NAMESPACE } = require('./constants')

module.exports = (nodecg, defaults = {}) => {
  const createReplicant = (name) => (
    nodecg.Replicant(name, NAMESPACE, {
      defaultValue: defaults[name],
      persistent: false,
    })
  )

  return {
    test: createReplicant('test'),
  }
}
