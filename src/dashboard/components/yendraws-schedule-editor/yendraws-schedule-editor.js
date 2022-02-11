/* global NodeCG */

import * as Polymer from '@polymer/polymer'
import '@polymer/paper-input/paper-input'
import '@polymer/paper-button/paper-button'

const schedule = NodeCG.Replicant('schedule', 'nodecg-yendraws')

import '../twitchie-style/twitchie-style'

class YendrawsScheduleEditor extends Polymer.PolymerElement {
  static get template() {
    return Polymer.html`
    <style include="twitchie-style"></style>

    <style>
      .c-schedule-list {
        max-height: 10em;
        border-bottom: 1px solid #ccc;
        margin: 0 auto 0.5rem;
      }

      .c-schedule-list__command {
        padding: 0.5rem 0;
        border-bottom: 1px solid #ccc;
        font-size: 0.8em;
      }

      .c-schedule-list__command:last-child {
        border-bottom: none;
      }

      .c-schedule-list-field {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    </style>

    <div class="c-field-group">
      <paper-input label="Monday" value="{{monday}}" class="c-field-group__field c-flush-input"></paper-input>
    </div>

    <div class="c-field-group">
      <paper-input label="Tuesday" value="{{tuesday}}" class="c-field-group__field c-flush-input"></paper-input>
    </div>

    <div class="c-field-group">
      <paper-input label="Wednesday" value="{{wednesday}}" class="c-field-group__field c-flush-input"></paper-input>
    </div>

    <div class="c-field-group">
      <paper-input label="Thursday" value="{{thursday}}" class="c-field-group__field c-flush-input"></paper-input>
    </div>

    <div class="c-field-group">
      <paper-input label="Friday" value="{{friday}}" class="c-field-group__field c-flush-input"></paper-input>
    </div>

    <div class="c-field-group">
      <paper-input label="Saturday" value="{{saturday}}" class="c-field-group__field c-flush-input"></paper-input>
    </div>

    <div class="c-field-group">
      <paper-input label="Sunday" value="{{sunday}}" class="c-field-group__field c-flush-input"></paper-input>
    </div>

    <paper-button raised="" on-tap="saveSchedule">
      <iron-icon icon="icons:done"></iron-icon>
      Save schedule
    </paper-button>
`
  }

  static get is() {
    return 'yendraws-schedule-editor'
  }

  static get properties() {
    return {
      monday: {
        type: String,
      },
      tuesday: {
        type: String,
      },
      wednesday: {
        type: String,
      },
      thursday: {
        type: String,
      },
      friday: {
        type: String,
      },
      saturday: {
        type: String,
      },
      sunday: {
        type: String,
      },
    }
  }

  saveSchedule() {
    schedule.value = {
      monday: this.monday,
      tuesday: this.tuesday,
      wednesday: this.wednesday,
      thursday: this.thursday,
      friday: this.friday,
      saturday: this.saturday,
      sunday: this.sunday,
    }
  }

  ready() {
    super.ready()

    NodeCG.waitForReplicants(schedule).then(() => {
      schedule.on(
        'change',
        ({
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday,
        }) => {
          this.monday = monday
          this.tuesday = tuesday
          this.wednesday = wednesday
          this.thursday = thursday
          this.friday = friday
          this.saturday = saturday
          this.sunday = sunday
        },
      )
    })
  }
}

customElements.define(YendrawsScheduleEditor.is, YendrawsScheduleEditor)
