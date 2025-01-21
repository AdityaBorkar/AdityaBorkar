// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function SchemaMarkup(props: { schema: Record<string, any> }) {
  return (
    <script
      type='application/ld+json'
      // biome-ignore lint/security/noDangerouslySetInnerHtml:
      dangerouslySetInnerHTML={{ __html: JSON.stringify(props.schema) }}
    />
  )
}
