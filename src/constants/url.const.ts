import { CONFIG } from './config.const'

export const pages = {
  home: {
    title: CONFIG.title,
    path: '/',
  },
  login: {
    title: 'Sign in',
    path: '/login',
  },
  saved: {
    title: 'Your saved',
    path: '/saved',
  },
}

export const api = {
  shhh: '/api/shhh',
  saved: (user_id: string) => `/api/saved?user_id=${user_id}`,
}
