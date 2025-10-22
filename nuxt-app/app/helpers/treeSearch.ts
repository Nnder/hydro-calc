export function findCategoryFromUrl(sections, encodedUrlName, targetCategoryName = null) {
  // Декодируем название из URL (например, "Дизельные%20электростанции" -> "Дизельные электростанции")
  const searchName = decodeURIComponent(encodedUrlName)
  const results = []

  if ('stroitelnoe-oborydovanie' === searchName || 'electrostancii' === searchName) {
    results.push(sections[searchName])
    return results
  }

  // Если указана targetCategoryName, сначала находим её
  let targetCategory = null
  if (targetCategoryName) {
    Object.values(sections).forEach(section => {
      section.children.forEach(rootCat => {
        // Изменено с categories на children
        searchInTreeForTarget(rootCat, targetCategoryName, results)
      })
    })
    if (results.length > 0) {
      targetCategory = results[0] // Берем первую найденную (предполагаем уникальность)
      results.length = 0 // Очищаем для нового поиска
    } else {
      return results // Если target не найдена, возвращаем пустой массив
    }
  }

  // Теперь ищем searchName: если targetCategory указана, ищем внутри неё; иначе по всему sections
  if (targetCategory) {
    searchInTree(targetCategory, searchName, results)
  } else {
    Object.values(sections).forEach(section => {
      section.children.forEach(rootCat => {
        // Изменено с categories на children
        searchInTree(rootCat, searchName, results)
      })
    })
  }

  return results
}

// Вспомогательная рекурсивная функция для поиска целевой категории
export function searchInTreeForTarget(node, name, results) {
  if (node.title === name) {
    results.push(node)
    return // Останавливаемся после первого совпадения для target
  }
  node.children.forEach(child => searchInTreeForTarget(child, name, results))
}

// Вспомогательная рекурсивная функция для поиска по имени
export function searchInTree(node, name, results) {
  if (node.title === name) {
    results.push(node)
  }
  node.children.forEach(child => searchInTree(child, name, results))
}
