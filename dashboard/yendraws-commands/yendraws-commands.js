/* global nodecg, NodeCG, Polymer */

(() => {
  const commands = nodecg.Replicant('commands', 'nodecg-yendraws', {
    defaultValue: [
      '!motherhen',
      '!commish',
      '!social',
      '!dani',
      '!shoutout',
    ],
  })

  class YendrawsCommands extends Polymer.Element {
    static get is() {
      return 'yendraws-commands'
    }

    static get properties() {
      return {
        commands: {
          type: Array,
          value: [],
        },
        target: {
          type: String,
        },
      }
    }

    sendCommand(event) {
      const { target } = this
      const command = event.model.get('command')

      nodecg.sendMessage(
        'chat.command',
        {
          command,
          target,
        },
      )
    }

    async ready() {
      super.ready()
      await NodeCG.waitForReplicants(commands)

      commands.on(
        'change',
        (newCommands) => {
          this.commands = newCommands
        },
      )
    }
  }

  customElements.define(YendrawsCommands.is, YendrawsCommands)
})()
