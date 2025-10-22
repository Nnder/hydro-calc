import { fixName } from '~/utils/fixName'

// ~/utils/findCategory.js (или где у тебя утилиты)
export function findCategoryByName(sections, name) {
  const searchName = fixName(decodeURIComponent(name))

  if ('stroitelnoe-oborydovanie' === searchName || 'electrostancii' === searchName) {
    return sections[searchName]
  }

  // Проходим по всем секциям (electrostancii и stroitelnoe-oborydovanie)
  for (const section of Object.values(sections)) {
    // Рекурсивно ищем в children каждой секции
    for (const rootCat of section.children) {
      const found = searchInTree(rootCat, searchName)
      if (found) return found // Возвращаем первый найденный и выходим
    }
  }
  return null // Если ничего не найдено
}

// Вспомогательная рекурсивная функция для поиска по title
function searchInTree(node, name) {
  if (fixName(node.title) === name) {
    return node // Нашли — возвращаем
  }
  // Рекурсивно ищем в дочерних
  for (const child of node.children) {
    const found = searchInTree(child, name)
    if (found) return found // Возвращаем, как только нашли
  }
  return null // Не нашли в этом поддереве
}
