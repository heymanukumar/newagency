const assetExtensions = new Set([
  'css',
  'js',
  'png',
  'jpg',
  'jpeg',
  'svg',
  'ico',
  'json',
  'txt',
  'xml',
  'webmanifest',
])

const getExtension = (pathname) => pathname.split('.').pop()?.toLowerCase()

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const extension = getExtension(url.pathname)
    const shouldServeAsset = extension && assetExtensions.has(extension)
    const assetRequest = shouldServeAsset ? request : new Request(`${url.origin}/index.html`, request)

    return env.ASSETS.fetch(assetRequest)
  },
}
