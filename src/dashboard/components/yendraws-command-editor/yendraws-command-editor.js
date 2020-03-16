import * as Polymer from '@polymer/polymer'
import '@polymer/paper-input/paper-input'
import '@polymer/paper-button/paper-button'
import '@polymer/iron-list/iron-list'

const commands = nodecg.Replicant('commands', 'nodecg-yendraws', {
  defaultValue: ['!motherhen', '!commish', '!social', '!dani', '!shoutout'],
  persistent: true,
})

import '../twitchie-style/twitchie-style'

class YendrawsCommandEditor extends Polymer.PolymerElement {
  static get template() {
    return Polymer.html`
    <style include="twitchie-style"></style>

    <style>
      .c-command-list {
        max-height: 10em;
        border-bottom: 1px solid #ccc;
        margin: 0 auto 1rem;
      }

      .c-command-list__command {
        padding: 0.5rem 0;
        border-bottom: 1px solid #ccc;
        font-size: 0.8em;
      }

      .c-command-list__command:last-child {
        border-bottom: 0;
      }

      .c-command-list-field {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    </style>

    <h4>Chat commands</h4>

    <iron-list class="c-command-list" items="[[commands]]" as="command">
      <template>
        <div class="c-command-list__command">
          <div class="c-command-list-field">
            <span>
              {{command}}
            </span>

            <paper-icon-button icon="icons:remove-circle-outline" on-tap="removeCommand"></paper-icon-button>
          </div>
        </div>
      </template>
    </iron-list>

    <h4>Add new command</h4>

    <div class="c-field-group">
      <paper-input label="New command" value="{{newCommand}}" class="c-field-group__field c-flush-input"></paper-input>
    </div>

    <paper-button raised="" on-tap="addCommand">
      <iron-icon icon="icons:add"></iron-icon>
      Add command
    </paper-button>
`
  }

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
    commands.value = newCommands.sort((a, b) => a.localeCompare(b))

    this.newCommand = ''
  }

  removeCommand(event) {
    const commandToRemove = event.model.get('command')

    this.updateCommands(this.commands.filter(command => command !== commandToRemove))
  }

  addCommand() {
    this.updateCommands([...this.commands, this.newCommand])
  }

  ready() {
    super.ready()

    NodeCG.waitForReplicants(commands).then(() => {
      commands.on('change', newCommands => {
        this.commands = newCommands
      })
    })
  }
}

customElements.define(YendrawsCommandEditor.is, YendrawsCommandEditor)
