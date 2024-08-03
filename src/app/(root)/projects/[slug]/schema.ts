import AdityaBorkarPerson from '@/schema/person'
import type { ProjectType } from '../types'
import type { SoftwareApplication, WithContext } from 'schema-dts'

export default function generateProjectSchema(project: ProjectType) {
  // https://schema.org/WebApplication
  // https://schema.org/SoftwareApplication

  const jsonLd: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    about: project.description,
    abstract: project.description,
    accountablePerson: AdityaBorkarPerson,
    // applicationCategory: [project.category],
    // applicationSubCategory
    // softwareHelp
    // softwareAddOn
    // screenshot
    // installUrl
    // featureList
    // downloadUrl
    // applicationSuite	: The name of the application suite to which the application belongs (e.g. Excel belongs to Office).
    // ---
  }

  return {}
}
