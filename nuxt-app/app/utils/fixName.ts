export function fixName(name: string) {
  return name.replaceAll(' ', '-').replaceAll('/', '-').toLowerCase()
}
