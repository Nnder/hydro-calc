export function fixName(name: string) {
  return name.replace('/', '-').replace(' ', '-').toLowerCase()
}
