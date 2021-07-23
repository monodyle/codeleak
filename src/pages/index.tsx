import { useCallback, useState } from 'react'
import { Layout, Input, Button, Result, Explain } from 'components'

const IndexPage = () => {
  const [result, setResult] = useState<null | string>(null)
  const [input, setInput] = useState<string>('')

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleInput()
  }

  const handleInput = useCallback(() => {
    if (input.trim() === '') return
    console.log(input)
    setResult(window.btoa(input))
  }, [input])

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <Input
          placeholder="Enter code or URL to share"
          className="block w-full max-w-sm text-center"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => handleEnterKey(e)}
        />
        <div className="w-2" />
        <Button onClick={() => handleInput()}>Go!</Button>
      </div>
      <div className="h-6" />
      {result !== null && <Result>{result}</Result>}
      <Explain />
    </Layout>
  )
}

export default IndexPage
