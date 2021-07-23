import type { AppProps } from 'next/app'
import { StrictMode } from 'react'
import { SEO } from 'components/seo'
import 'styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <SEO />
      <Component {...pageProps} />
    </StrictMode>
  )
}
