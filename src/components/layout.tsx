import { CONFIG } from 'constants/config.const'
import { Fragment } from 'react'
import { SEO, Header, Footer } from './index'

interface Props {
  title?: string
  flex?: boolean
}

const Layout: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <SEO title={`${props.title ? props.title + ' - ' : ''}${CONFIG.title}`} />
      <div className="flex flex-col max-w-2xl min-h-screen p-12 mx-auto">
        <Header />
        <main
          className={[props.flex ? 'flex flex-col flex-auto' : ''].join(' ')}
        >
          {props.children}
        </main>
        <Footer />
      </div>
    </Fragment>
  )
}

export { Layout }
