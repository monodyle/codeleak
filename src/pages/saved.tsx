import { Session } from '@supabase/supabase-js'
import { Button, Layout, SavedItem } from 'components'
import { ArrowDownIcon, ArrowUpIcon } from 'components/icons'
import { DataResult } from 'constants/interface.const'
import { api, pages } from 'constants/url.const'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { userAtom } from 'stores/auth.store'
import { loadingAtom } from 'stores/loading.store'
import { fetcher } from 'utils/fetcher'
import { supabase } from 'utils/supabase'

const SavedPage = () => {
  const [, setLoading] = useAtom(loadingAtom)
  const [user] = useAtom(userAtom)
  const [session, setSession] = useState<null | Session>(null)
  const [data, setData] = useState<null | DataResult[]>(null)
  const [ascending, setAscending] = useState(false)
  const items = useMemo(
    () => (data && ascending ? data.slice().reverse() : data),
    [ascending, data],
  )

  const router = useRouter()
  useEffect(() => {
    const session = supabase.auth.session()
    if (session === null) {
      router.push(pages.login.path)
      return
    }
    setSession(session)
  }, [router])

  useEffect(() => {
    async function fetchData() {
      if (!user?.id) return
      try {
        setLoading(true)
        const { error, result } = await fetcher.get<DataResult[]>(
          api.saved(user.id),
        )
        if (error) return console.error(error)
        setData(result)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [setLoading, user?.id])

  return session ? (
    <Layout title={pages.saved.title} flex>
      <div className="h-12" />
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-gray-700">
          {pages.saved.title}
        </h4>
        <Button variant="small" onClick={() => setAscending((v) => !v)}>
          {ascending ? (
            <Fragment>
              Oldest
              <ArrowDownIcon className="w-4 h-4" />
            </Fragment>
          ) : (
            <Fragment>
              Newest
              <ArrowUpIcon className="w-4 h-4" />
            </Fragment>
          )}
        </Button>
      </div>
      <div className="h-2" />
      {items && items.length ? (
        items.map((item, key) => (
          <Fragment key={item.code || key}>
            <SavedItem
              code={item.code || ''}
              url={item.url}
              created_at={item.created_at}
            />
            <div className="h-3" />
          </Fragment>
        ))
      ) : (
        <div className="px-4 py-2 text-sm text-center text-gray-500 border border-gray-100 rounded-lg">
          Nothing here,
          <br />
          Start your{' '}
          <Link href={pages.home.path}>
            <a>sharing now</a>
          </Link>
          !
        </div>
      )}
    </Layout>
  ) : null
}

export default SavedPage
