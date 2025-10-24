export function findFirstOfferWithPicture(node) {
  if (!node) return null

  if (node?.pictures && node?.pictures.length > 0) {
    return node.pictures[0]
  }

  // Сначала проверяем офферы в этой категории
  for (const offer of node.offers || []) {
    if (offer.pictures && offer.pictures.length > 0) {
      return offer.pictures[0]
    }
  }

  // Если нет, идём в детей рекурсивно
  for (const child of node.children || []) {
    const picture = findFirstOfferWithPicture(child)
    if (picture) return picture
  }

  return null
}
