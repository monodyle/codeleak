import { Button, Input, Layout } from 'components'
import { CONFIG } from 'constants/config.const'
import { patterns } from 'constants/pattern.const'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import { supabase } from 'utils/supabase'
import { useAtom } from 'jotai'
import { loadingAtom } from 'stores/loading.store'

const LoginPage = () => {
  const [loading, setLoading] = useAtom(loadingAtom)
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')

  const router = useRouter()
  useEffect(() => {
    const session = supabase.auth.session()
    if (session !== null) router.push('/')
  }, [router])

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
    <Layout title="Login" flex>
      <div className="flex flex-col items-center flex-auto">
        <div className="h-24" />
        <Image
          src={`/illustration/${sent ? 'email-heart' : 'paper-plane'}.svg`}
          alt="Email"
          width={128}
          height={128}
        />
        <div className="h-12" />
        {sent ? (
          <Fragment>
            <h4 className="mb-2 text-lg font-semibold text-gray-700">
              An email is on its way!
            </h4>
            <p className="w-3/4 text-sm text-center text-gray-500">
              We sent an email to <strong>{email}</strong>.<br />
              You can fin a magic link that will sign you into {CONFIG.title}.
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <p className="w-3/4 mb-8 text-sm text-center text-gray-500">
              Welcome, always ready for sharing.
            </p>
            <div className="flex flex-col items-stretch xl:w-3/4">
              <Input
                type="email"
                placeholder="Your email"
                className="text-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="h-3" />
              <Button
                type="button"
                disabled={
                  email.trim() === '' || loading || !patterns.email.test(email)
                }
                onClick={() => sendLogin()}
              >
                Send me magic link!
              </Button>
            </div>
            <div className="h-6" />
            {loading && (
              <div className="text-sm text-gray-500">Wait a minute...</div>
            )}
          </Fragment>
        )}
        <div className="h-24" />
      </div>
    </Layout>
  )
}

export default LoginPage
