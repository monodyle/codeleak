import { pages } from 'constants/url.const'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { Fragment } from 'react'
import { userAtom } from 'stores/auth.store'

export const UserStatus = () => {
  const [user] = useAtom(userAtom)

  return (
    <div className="text-sm text-center text-gray-500">
      {user ? (
        <Fragment>
          Hello{' '}
          <Link href={pages.saved.path}>
            <a className="font-medium text-purple-500">{user.email}</a>
          </Link>
          , wanna get some fun?!
        </Fragment>
      ) : (
        <Fragment>
          Hello anon, did you know{' '}
          <Link href={pages.login.path}>
            <a className="font-medium text-purple-500">sign in</a>
          </Link>{' '}
          can save your sharing?
        </Fragment>
      )}
    </div>
  )
}
