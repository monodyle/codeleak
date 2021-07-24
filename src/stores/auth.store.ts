import { Session, User } from '@supabase/gotrue-js'
import { atom } from 'jotai'

export const sessionAtom = atom<null | Session>(null)
export const userAtom = atom<null | User>(null)
