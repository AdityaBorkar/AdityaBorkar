import type { ItemList, WithContext } from 'schema-dts'

const ProjectListSchema: WithContext<ItemList> = {
  '@type': 'ItemList',
  '@context': 'https://schema.org',
  // TODO: LIST OF PROJECTS
}

export default ProjectListSchema
