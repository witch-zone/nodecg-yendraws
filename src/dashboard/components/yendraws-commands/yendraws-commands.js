import * as Polymer from '@polymer/polymer'
import '@polymer/paper-input/paper-input'
import '@polymer/paper-button/paper-button'

const commands = nodecg.Replicant('commands', 'nodecg-yendraws', { persistent: true })

import '../twitchie-style/twitchie-style'

class YendrawsCommands extends Polymer.PolymerElement {
  static get template() {
    return Polymer.html`
    <style include="twitchie-style"></style>

    <style>
      .c-button-panel {
        display: flex;
        flex-flow: row wrap;
        margin: -0.5em;
      }

      .c-button-panel__button {
        font-size: 0.8em;
        flex: 40% 1 1;
        margin: 0.25em;
      }
    </style>

    <div class="c-field-group">
      <paper-input label="Target" value="{{target}}" class="c-field-group__field c-flush-input"></paper-input>
    </div>

    <div class="c-button-panel">
      <dom-repeat items="{{commands}}" as="command">
        <template>
          <paper-button class="c-button-panel__button" raised="" on-tap="sendCommand">
            [[command]]
          </paper-button>
        </template>
      </dom-repeat>
    </div>
`
  }

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

    nodecg.sendMessage('chat.command', {
      command,
      target,
    })

    this.target = ''
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

customElements.define(YendrawsCommands.is, YendrawsCommands)
