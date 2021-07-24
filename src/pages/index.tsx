import { useCallback, useEffect, useState } from 'react'
import { Layout, Input, Button, Result, Explain, Footer } from 'components'
import { useAtom } from 'jotai'
import { userAtom } from 'stores/auth.store'
import { detector, UserInputType } from 'utils/input'

const IndexPage = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<null | string>(null)
  const [input, setInput] = useState('')
  const [type, setType] = useState<UserInputType>(false)
  const [user] = useAtom(userAtom)

  const handleInput = useCallback(() => {
    if (input.trim() === '') return
    console.log(input)
    setResult(window.btoa(input))
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
      <div className="h-4" />
      {user && (
        <div className="mb-3 text-sm text-center text-gray-500">
          Hello{' '}
          <span className="font-medium text-purple-500">{user.email}</span>,
          wanna get some fun?!
        </div>
      )}
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
      <Footer />
    </Layout>
  )
}

export default IndexPage
