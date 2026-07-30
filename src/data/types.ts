export interface Job {
  company: string
  role: string
  location: string
  period: string
  bullets: string[]
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Project {
  title: string
  description: string
  image: string
  link?: string
  repo?: string
}

export interface EducationEntry {
  title: string
  institution: string
  period: string
}

export interface LanguageEntry {
  name: string
  level: string
}

export interface Social {
  label: string
  url: string
  icon: 'github' | 'linkedin'
}

export interface PersonalInfo {
  name: string
  fullName: string
  role: string
  profilePicture: string
  intro: string
  email: string
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  aboutParagraphs: string[]
  experience: Job[]
  skillCategories: SkillCategory[]
  projects: Project[]
  education: EducationEntry[]
  languages: LanguageEntry[]
  socials: Social[]
}
