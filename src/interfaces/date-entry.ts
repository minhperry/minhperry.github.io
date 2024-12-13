export interface TimelineEvent {
  start: string
  end?: string
  title: string
  description: string | string[]
  link?: string
}