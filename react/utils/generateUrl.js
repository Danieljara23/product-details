export const DEFAULT_WIDTH = 'auto'
export const DEFAULT_HEIGHT = 'auto'
export const MAX_WIDTH = 3000
export const MAX_HEIGHT = 4000

/**
 * Having the url above as base,
 * https://storecomponents.vteximg.com.br/arquivos/ids/155472/Frame-3.jpg?v=636793763985400000
 * the following regex will match https://storecomponents.vteximg.com.br/arquivos/ids/155472
 * @type {RegExp}
 */
const baseUrlRegex = new RegExp(/.+ids\/(\d+)/)

export function cleanImageUrl(imageUrl) {
  const result = baseUrlRegex.exec(imageUrl)
  if (result.length > 0) return result[0]
}

export function changeImageUrlSize(
  imageUrl,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
) {
  if (!imageUrl) return
  typeof width === 'number' && (width = Math.min(width, MAX_WIDTH))
  typeof height === 'number' && (height = Math.min(height, MAX_HEIGHT))

  imageUrl = cleanImageUrl(imageUrl)

  return `${imageUrl}-${width}-${height}`
}
