const patterns = {
  email:
    /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
  url: /^(https?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
}

export const isEmail = (email: string): boolean => {
  if (!email) return false

  const [account, address] = email.split('@')
  if (!account || !address) return false
  if (account.length > 64) return false
  if (address.length > 255) return false

  const parts = address.split('.')
  if (parts.some((part) => part.length > 63)) return false

  return patterns.email.test(email)
}

export const isURL = (url: string): boolean => {
  if (!url) return false
  try {
    new URL(url)
    return patterns.url.test(url)
  } catch (_) {
    return false
  }
}
