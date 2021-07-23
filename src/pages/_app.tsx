import type { AppProps } from 'next/app'
import { StrictMode } from 'react'
import 'styles/global.css'

import SEO from 'components/seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <SEO />
      <Component {...pageProps} />
    </StrictMode>
  )
}
