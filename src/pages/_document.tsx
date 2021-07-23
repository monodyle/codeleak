import { CONFIG } from 'constants/config.const'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="apple-mobile-web-app-title" content={CONFIG.title} />
          <meta name="application-name" content={CONFIG.title} />
          <meta name="msapplication-TileColor" content={CONFIG.colors.title} />
          <meta name="theme-color" content={CONFIG.colors.theme} />

          <link
            rel="preload"
            as="font"
            href="/fonts/DelaGothicOne.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
