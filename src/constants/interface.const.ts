import { UserInputType } from 'utils/input'

export interface Payload {
  type: UserInputType
  input: string
  user_id?: string
}

export interface APIResponse<T> {
  result: T | null
  error: unknown
}

export interface DataResult {
  code?: string
  url: string
  created_at: string
  created_by?: string
}
