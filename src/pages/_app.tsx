import type { AppProps } from 'next/app'
import { StrictMode } from 'react'
import { Auth, SEO } from 'components'
import 'styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Auth>
        <SEO />
        <Component {...pageProps} />
      </Auth>
    </StrictMode>
  )
}
