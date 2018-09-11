/* global nodecg, NodeCG, Polymer */

(() => {
  const commands = nodecg.Replicant(
    'commands',
    'nodecg-yendraws',
    {
      defaultValue: [
        '!motherhen',
        '!commish',
        '!social',
        '!dani',
        '!shoutout',
      ],
      persistent: true,
    },
  )

  class YendrawsCommandEditor extends Polymer.Element {
    static get is() {
      return 'yendraws-command-editor'
    }

    static get properties() {
      return {
        commands: {
          type: Array,
          value: [],
        },
        newCommand: {
          type: String,
        },
      }
    }

    updateCommands(newCommands) {
      commands.value = newCommands.sort(
        (a, b) => a.localeCompare(b)
      )

      this.newCommand = ''
    }

    removeCommand(event) {
      const commandToRemove = event.model.get('command')

      this.updateCommands(
        this.commands.filter(
          (command) => command !== commandToRemove
        )
      )
    }

    addCommand() {
      this.updateCommands([
        ...this.commands,
        this.newCommand,
      ])
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

  customElements.define(YendrawsCommandEditor.is, YendrawsCommandEditor)
})()
