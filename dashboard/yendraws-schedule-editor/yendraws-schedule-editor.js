/* global nodecg, NodeCG, Polymer */

(() => {
  const schedule = nodecg.Replicant(
    'schedule',
    'nodecg-yendraws',
    {
      defaultValue: {
        monday: undefined,
        tuesday: undefined,
        wednesday: undefined,
        thursday: undefined,
        friday: undefined,
        saturday: undefined,
        sunday: undefined,
      },
      persistent: true,
    },
  )

  class YendrawsScheduleEditor extends Polymer.Element {
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

    async ready() {
      super.ready()
      await NodeCG.waitForReplicants(schedule)

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
    }
  }

  customElements.define(YendrawsScheduleEditor.is, YendrawsScheduleEditor)
})()
