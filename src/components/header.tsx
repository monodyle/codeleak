import { CONFIG } from 'constants/config.const'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <Link href="/">
        <a className="border-none">
          <h1 className="text-2xl text-center text-purple-500 font-display hover:text-purple-600">
            {CONFIG.title}
          </h1>
        </a>
      </Link>
    </header>
  )
}
