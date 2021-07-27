import {
  Button,
  Error,
  Explain,
  Input,
  Layout,
  Result,
  UserStatus,
} from 'components'
import { DataResult, Payload } from 'constants/interface.const'
import { api } from 'constants/url.const'
import { useAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import { userAtom } from 'stores/auth.store'
import { loadingAtom } from 'stores/loading.store'
import { fetcher } from 'utils/fetcher'
import { detector, getButtonLabel, UserInputType } from 'utils/input'

const IndexPage = () => {
  const [loading, setLoading] = useAtom(loadingAtom)
  const [result, setResult] = useState<null | DataResult | string>(null)
  const [error, setError] = useState<any>(null)
  const [input, setInput] = useState('')
  const [type, setType] = useState<UserInputType>(false)
  const [user] = useAtom(userAtom)

  const handleInput = useCallback(async () => {
    if (input.trim() === '') return
    try {
      setResult(null)
      setError(null)
      setLoading(true)
      const payload: Payload = {
        type,
        input,
      }
      if (user?.id) payload.user_id = user.id
      const { error, result } = await fetcher.post<DataResult>(api.shhh, {
        method: 'POST',
        body: JSON.stringify(payload),
      })
      if (error) return setError(error)
      if (result) return setResult(result)
      setResult('Oops! We cant look up anything, please check again.')
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [input, setLoading, type, user?.id])

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleInput()
  }

  useEffect(() => {
    setType(detector(input))
  }, [input])

  return (
    <Layout flex>
      <div className="h-12" />
      <UserStatus />
      <div className="h-4" />
      <div className="flex items-center justify-center w-full">
        <Input
          placeholder="Enter code or URL"
          className="flex-auto block max-w-md text-center"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => handleEnterKey(e)}
        />
        <div className="w-2" />
        <Button
          onClick={() => handleInput()}
          disabled={loading || type === false || input.trim() === ''}
        >
          {getButtonLabel(type)}
        </Button>
      </div>
      <div className="h-6" />
      {result !== null &&
        (typeof result === 'string' ? (
          <p className="text-center text-red-400">{result}</p>
        ) : (
          <Result>{result.code || result.url}</Result>
        ))}
      {error !== null && <Error>{error}</Error>}
      <div className="h-8" />
      <Explain />
    </Layout>
  )
}

export default IndexPage
