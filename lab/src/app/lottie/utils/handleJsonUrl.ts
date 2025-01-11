export async function handleJsonUrl(url: string) {
  const name = url.split('/').pop()?.replace('.json', '')
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  const layers = json.layers.shift()
  console.log({ name, json, layers })
  return { name, json }
}
