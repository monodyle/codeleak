import { useAtom } from 'jotai'
import { Fragment, useCallback, useEffect } from 'react'
import { sessionAtom, userAtom } from 'stores/auth.store'
import { supabase } from 'utils/supabase'
import { loadingAtom } from 'stores/loading.store'

interface Props {
  children: any
}

export const Auth = (props: Props) => {
  const [, setUser] = useAtom(userAtom)
  const [, setSession] = useAtom(sessionAtom)
  const [loading, setLoading] = useAtom(loadingAtom)

  const handleAuth = useCallback(() => {
    setLoading(true)
    try {
      const session = supabase.auth.session()
      const user = supabase.auth.user()
      setSession(session)
      setUser(user)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [setLoading, setSession, setUser])

  useEffect(() => {
    handleAuth()
    supabase.auth.onAuthStateChange((_, session) => {
      setSession(session)
    })
  }, [handleAuth, setSession])

  return (
    <Fragment>
      {loading && (
        <div className="fixed pointer-events-none bottom-12 right-12">
          <img src="/loading.svg" alt="Loading" width={64} height={64} />
        </div>
      )}
      {props.children}
    </Fragment>
  )
}
