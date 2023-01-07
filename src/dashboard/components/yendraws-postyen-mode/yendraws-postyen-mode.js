/* global NodeCG */

import * as Polymer from '@polymer/polymer'
import '@polymer/paper-radio-button/paper-radio-button'
import '@polymer/paper-radio-group/paper-radio-group'

const mode = NodeCG.Replicant('postyen.mode', 'nodecg-yendraws')

import '../twitchie-style/twitchie-style'

class YendrawsPostyenMode extends Polymer.PolymerElement {
  static get template() {
    return Polymer.html`
    <style include="twitchie-style"></style>

    <div class="c-field-group">
      <paper-radio-group selected="{{mode}}" class="c-field-group__field c-flush-input">
        <paper-radio-button name="digital">Digital</paper-radio-button>
        <paper-radio-button name="traditional">Traditional</paper-radio-button>
        <paper-radio-button name="games">Games</paper-radio-button>
      </paper-radio-group>
    </div>
`
  }

  static get is() {
    return 'yendraws-postyen-mode'
  }

  static get properties() {
    return {
      mode: {
        type: String,
      },
    }
  }

  _onModeUpdate(newMode) {
    mode.value = newMode
  }

  ready() {
    super.ready()

    this._createPropertyObserver('mode', this._onModeUpdate)

    NodeCG.waitForReplicants(mode).then(() => {
      mode.on('change', (newMode) => {
        this.mode = newMode || 'digital'
      })
    })
  }
}

customElements.define(YendrawsPostyenMode.is, YendrawsPostyenMode)
