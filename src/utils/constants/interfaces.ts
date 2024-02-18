export interface NavLink {
  name: string
  url: string
}

export interface Skills {
  name: string
  image: string
}

export interface SkillProps {
  title: string
  skills: Skills[]
}

export interface ExperienceProps {
  id: number
  image: string
  role: string
  company: string
  date: string
  skills: string[]
}

export interface ProjectProps {
  id: number
  title: string
  date: string
  descriptionription: string
  image: string
  tags: string[]
  category: string
  github: string
  website: string
}

export interface UserInfo {
  name: string
  email: string
  message: string
}
