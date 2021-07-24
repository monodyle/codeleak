const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/

export type UserInputType = false | 'code' | 'url'

const detector = (input: string): UserInputType => {
  if (input.length === 8) return 'code'
  if (urlPattern.test(input)) return 'url'
  return false
}

export { detector, urlPattern }
