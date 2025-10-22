import { fixName } from '~/utils/fixName'

// ~/utils/findCategory.js
export function findCategoryByName(sections, name) {
  const searchName = fixName(decodeURIComponent(name))

  // Проверяем прямые секции по ключу
  if (sections[searchName]) {
    return sections[searchName]
  }

  // Итеративный поиск по дереву (без рекурсии, с использованием стека)
  const stack = []
  // Добавляем корневые категории из всех секций
  for (const section of Object.values(sections)) {
    for (const rootCat of section.children) {
      stack.push(rootCat)
    }
  }

  // DFS-поиск
  while (stack.length > 0) {
    const node = stack.pop()
    if (fixName(node.title) === searchName) {
      return node
    }
    // Добавляем детей в стек (в обратном порядке для сохранения порядка)
    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i])
      }
    }
  }

  return null
}
