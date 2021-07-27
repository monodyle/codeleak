export const dateFormat = (date: number | Date | string) =>
  new Intl.DateTimeFormat('en-US').format(new Date(date))
