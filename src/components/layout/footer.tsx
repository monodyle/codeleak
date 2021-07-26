import { CONFIG, LINKS } from 'constants/config.const'
import { useAtom } from 'jotai'
import { userAtom } from 'stores/auth.store'
import { supabase } from 'utils/supabase'

export const Footer = () => {
  const [user] = useAtom(userAtom)

  return (
    <footer className="mt-auto">
      <div className="text-sm text-center text-gray-400">
        <p className="mb-1">
          {CONFIG.title} by{' '}
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            {CONFIG.author}
          </a>
        </p>
        <div className="flex items-center justify-center">
          {user && (
            <button
              className="font-medium border-b border-gray-400 border-dashed hover:text-purple-500"
              onClick={() => supabase.auth.signOut()}
            >
              Logout?
            </button>
          )}
          <div className="w-4" />
          <a href={LINKS.report} target="_blank" rel="noreferrer">
            Report bugs
          </a>
        </div>
      </div>
    </footer>
  )
}
