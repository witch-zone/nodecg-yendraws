const { NAMESPACE } = require('./constants')

module.exports = (
  nodecg,
  defaults = {
    commands: ['!motherhen', '!commish', '!social', '!dani', '!follow'],
  }
) => {
  const createReplicant = name =>
    nodecg.Replicant(name, NAMESPACE, {
      defaultValue: defaults[name],
    })

  return {
    commands: createReplicant('commands'),
    schedule: createReplicant('schedule'),
  }
}
