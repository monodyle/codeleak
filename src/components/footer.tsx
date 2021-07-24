import { CONFIG } from 'constants/config.const'
import { useAtom } from 'jotai'
import { userAtom } from 'stores/auth.store'
import { supabase } from 'utils/supabase'

export const Footer = () => {
  const [user] = useAtom(userAtom)

  return (
    <footer className="mt-auto">
      <div className="text-sm text-center text-gray-400">
        <p className="mb-1">
          {CONFIG.title} &copy; {CONFIG.author} {new Date().getFullYear()}+
        </p>
        {user && (
          <button
            className="font-medium border-b border-gray-400 border-dashed hover:text-purple-500"
            onClick={() => supabase.auth.signOut()}
          >
            Logout?
          </button>
        )}
      </div>
    </footer>
  )
}
