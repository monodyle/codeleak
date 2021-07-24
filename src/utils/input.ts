import { patterns } from 'constants/pattern.const'

export type UserInputType = false | 'code' | 'url'

const detector = (input: string): UserInputType => {
  if (input.length === 8) return 'code'
  if (patterns.url.test(input)) return 'url'
  return false
}

export { detector }
