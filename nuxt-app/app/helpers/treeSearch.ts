import { fixName } from '~/utils/fixName'

export function findCategoryByName(sections, name) {
  const searchName = fixName(decodeURIComponent(name))

  if (sections[searchName]) {
    return sections[searchName]
  }

  const stack = []
  for (const section of Object.values(sections)) {
    for (const rootCat of section.children) {
      stack.push(rootCat)
    }
  }

  while (stack.length > 0) {
    const node = stack.pop()
    if (fixName(node.title) === searchName) {
      return node
    }
    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i])
      }
    }
  }

  return null
}
