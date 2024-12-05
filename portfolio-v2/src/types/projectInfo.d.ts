import type { ProjectCategories } from './list'

type ProjectCategory =
  | 'All'
  | 'Frontend'
  | 'Backend'
  | 'Software Development'
  | 'Plugins & Extensions'
  | 'Artificial Intelligence'

type ProjectType = {
  title: string
  description: string
  tags: string[]
  website: string
  github: string
  heroImage: string
  categories: ProjectCategory[]
  // highlights: string[]
  // tech: { name: string; img: string }[]
}
