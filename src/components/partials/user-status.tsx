import { useAtom } from 'jotai'
import { Fragment } from 'react'
import Link from 'next/link'
import { userAtom } from 'stores/auth.store'
import { pages } from 'constants/url.const'

export const UserStatus = () => {
  const [user] = useAtom(userAtom)

  return (
    <div className="text-sm text-center text-gray-500">
      {user ? (
        <Fragment>
          Hello{' '}
          <span className="font-medium text-purple-500">{user.email}</span>,
          wanna get some fun?!
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
