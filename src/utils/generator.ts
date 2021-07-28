export const randomIdGenerator = () =>
  Math.random().toString(36).substr(2, 8).toUpperCase()
