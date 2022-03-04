import * as Polymer from '@polymer/polymer'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import '@polymer/iron-icons/image-icons'
import moment from 'moment'

import '../twitchie-style/twitchie-style'

class YendrawsCountdown extends Polymer.PolymerElement {
  static get template() {
    return Polymer.html`
    <style include="twitchie-style"></style>

    <style>
      .c-timer-target {
        margin: 0 auto 1rem;
      }

      .c-timer-countdown {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;

        margin: 0 auto 1rem;
        font-size: 2em;
      }

      .c-timer-countdown iron-icon {
        margin: 0 0.5em 0 0;
      }
    </style>

    <div class="c-timer-target">
      The timer has been set for

      <output id="target">
        {{targetText}}
      </output>.
    </div>

    <div class="c-timer-countdown">
      <iron-icon icon="image:timer"></iron-icon>

      <output id="countdown">
        {{countdownText}}
      </output>
    </div>
`
  }

  static get is() {
    return 'yendraws-countdown'
  }

  static get properties() {
    return {
      target: {
        type: Number,
        value: 0,
        observer: 'updateTicker',
      },
      finishedText: {
        type: String,
        value: 'Finished!',
      },
    }
  }

  tick() {
    const now = moment.utc()
    const diff = this.targetMoment.diff(now)

    if (diff <= 0) {
      clearTimeout(this.tickTimer)
      this.isFinished = true

      this.countdownText = this.finishedText

      this.dispatchEvent(new CustomEvent('countdown-finished'))
    } else {
      const diffMoment = moment.utc(diff)

      this.countdownText = diffMoment.format(
        diffMoment.hours() > 0 ? 'H:mm:ss' : 'm:ss',
      )
    }
  }

  updateTicker(newTarget) {
    clearTimeout(this.tickTimer)
    this.isFinished = false

    if (!newTarget) {
      return
    }

    this.targetMoment = moment.utc(newTarget)
    this.targetText = this.targetMoment.local().format('LTS, on LL')

    this.tick()

    if (this.isFinished) {
      return
    }

    this.tickTimer = setInterval(() => this.tick(), 1 * 1000)

    this.dispatchEvent(new CustomEvent('countdown-started'))
  }
}

customElements.define(YendrawsCountdown.is, YendrawsCountdown)
