export async function handleJsonUrl(url: string) {
  const name = url.split('/').pop()?.replace('.json', '')
  const response = await fetch(url, { method: 'GET' })
  const json = await response.json()
  const assets = await Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    json.assets.map(async (asset: any) => {
      if (asset.p) {
        const assetUrl = asset.u + asset.p
        const assetResponse = await fetch(assetUrl, { method: 'GET' })
        const assetBlob = await assetResponse.blob()
        const assetBlobUrl = await blobToDataUrl(assetBlob)
        asset.p = assetBlobUrl
        asset.u = ''
        asset.e = 1
      }
      return asset
    }),
  )
  json.layers.shift()
  json.assets = assets
  return { name, json }
}

function blobToDataUrl(blob: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}
