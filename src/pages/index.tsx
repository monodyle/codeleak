import { Fragment, useCallback, useEffect, useState } from 'react'
import { Layout, Input, Button, Result, Explain } from 'components'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { userAtom } from 'stores/auth.store'
import { detector, UserInputType } from 'utils/input'
import { loadingAtom } from 'stores/loading.store'

const IndexPage = () => {
  const [loading, setLoading] = useAtom(loadingAtom)
  const [result, setResult] = useState<null | string>(null)
  const [input, setInput] = useState('')
  const [type, setType] = useState<UserInputType>(false)
  const [user] = useAtom(userAtom)

  const handleInput = useCallback(() => {
    if (input.trim() === '') return
    setLoading(true)
    console.log(input)
    setResult(window.btoa(input))
    setLoading(false)
  }, [input])

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleInput()
  }

  useEffect(() => {
    setType(detector(input))
  }, [input])

  const getButtonLabel = () => {
    switch (type) {
      case 'code':
        return 'Reveal'
      case 'url':
        return 'Share'
      default:
        return 'Hm...'
    }
  }

  return (
    <Layout flex>
      <div className="h-12" />
      <div className="mb-3 text-sm text-center text-gray-500">
        {user ? (
          <Fragment>
            Hello{' '}
            <span className="font-medium text-purple-500">{user.email}</span>,
            wanna get some fun?!
          </Fragment>
        ) : (
          <Fragment>
            Hello, did you know{' '}
            <Link href="/login">
              <a className="font-medium text-purple-500">login</a>
            </Link>{' '}
            can save all your sharing?
          </Fragment>
        )}
      </div>
      <div className="flex items-center justify-center w-full">
        <Input
          placeholder="Enter code or URL"
          className="flex-auto block max-w-sm text-center"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => handleEnterKey(e)}
        />
        <div className="w-2" />
        <Button
          onClick={() => handleInput()}
          disabled={loading || type === false || input.trim() === ''}
        >
          {getButtonLabel()}
        </Button>
      </div>
      <div className="h-6" />
      {result !== null && <Result>{result}</Result>}
      <div className="h-8" />
      <Explain />
    </Layout>
  )
}

export default IndexPage
