import { CONFIG } from 'constants/config.const'
import { supabase } from 'utils/supabase'

export const Footer = () => {
  const handleLogout = () => {
    supabase.auth.signOut()
  }

  return (
    <footer className="mt-auto">
      <div className="text-sm text-center text-gray-400">
        <p className="mb-1">
          {CONFIG.title} &copy; {CONFIG.author} {new Date().getFullYear()}+
        </p>
        <button
          className="font-medium border-b border-gray-400 border-dashed hover:text-purple-500"
          onClick={() => handleLogout()}
        >
          Logout?
        </button>
      </div>
    </footer>
  )
}
