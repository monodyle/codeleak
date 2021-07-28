export const isEmail = (email: string): boolean => {
  if (!email) return false

  const [account, address] = email.split('@')
  if (!account || !address) return false
  if (account.length > 64) return false
  if (address.length > 255) return false

  const domainParts = address.split('.')
  if (domainParts.some((part) => part.length > 63)) return false

  return /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(
    email,
  )
}

export const isURL = (url: string): boolean => {
  if (!url) return false
  try {
    new URL(url)
    return true
  } catch (e) {
    return false
  }
}
