import { useAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import { sessionAtom, userAtom } from 'stores/auth.store'
import { supabase } from 'utils/supabase'

interface Props {
  children: any
}

export const Auth = (props: Props) => {
  const [user, setUser] = useAtom(userAtom)
  const [session, setSession] = useAtom(sessionAtom)
  const [loading, setLoading] = useState(false)

  const handleAuth = useCallback(async () => {
    setLoading(true)
    try {
      const session = supabase.auth.session()
      const user = supabase.auth.user()

      setSession(session)
      setUser(user)

      supabase.auth.onAuthStateChange((_, session) => {
        setSession(session)
      })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [setSession, setUser])

  useEffect(() => {
    handleAuth()
  }, [handleAuth])

  return props.children
}
