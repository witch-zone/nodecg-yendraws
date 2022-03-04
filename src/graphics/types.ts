export type Timer = string

export interface Schedule {
  monday?: string
  tuesday?: string
  wednesday?: string
  thursday?: string
  friday?: string
  saturday?: string
  sunday?: string
}

export interface OverlayStore {
  schedule: Schedule
  timer: Timer | undefined
}
