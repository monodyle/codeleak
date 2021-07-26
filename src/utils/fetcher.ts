import { APIResponse } from 'constants/interface.const'

const post = async <R>(
  url: string,
  data: any,
  options = {},
): Promise<APIResponse<R>> => {
  try {
    const response = await fetch(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    })
    return response.json()
  } catch (error) {
    return { error }
  }
}

export const fetcher = {
  post,
}
