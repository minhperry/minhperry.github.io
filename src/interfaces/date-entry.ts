export interface TimelineEvent {
  id: number
  start: string
  end?: string
  title: string
  description: string | string[]
}