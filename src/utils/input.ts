import { isURL } from './validator'

export type UserInputType = false | 'code' | 'url'

const detector = (input: string): UserInputType => {
  if (input.length === 8) return 'code'
  if (isURL(input)) return 'url'
  return false
}

const getButtonLabel = (type: UserInputType) => {
  switch (type) {
    case 'code':
      return 'Reveal'
    case 'url':
      return 'Share'
    default:
      return 'Hm...'
  }
}

export { detector, getButtonLabel }
