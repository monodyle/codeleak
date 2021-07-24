import { Button, Input, Layout } from 'components'
import { useState } from 'react'
import { supabase } from 'utils/supabase'

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')

  const sendLogin = async () => {
    try {
      setLoading(true)
      setSent(false)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      setSent(true)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout title="Login - ShareCode" flex>
      <div className="flex flex-col items-center justify-center flex-auto">
        <div className="flex items-center w-full">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-auto"
          />
          <div className="w-3" />
          <Button
            type="button"
            disabled={email.trim() === '' || loading}
            onClick={() => sendLogin()}
          >
            Send me magic link!
          </Button>
        </div>
        <div className="h-6" />
        {loading && (
          <div className="text-sm text-gray-500">Wait a minute...</div>
        )}
        {sent && (
          <div className="text-sm text-gray-500">
            An email have sent to your email, please check for the login link!
          </div>
        )}
        <div className="h-24" />
      </div>
    </Layout>
  )
}

export default LoginPage
