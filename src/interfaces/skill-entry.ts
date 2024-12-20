export interface SkillEntry {
  name: string,
  level: number,
  will: boolean,
  desc?: string
  isLanguage?: boolean,
}

export interface SkillSection {
  id: string,
  title: string,
  display: boolean,
  entries: SkillEntry[]
}