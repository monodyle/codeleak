import { CONFIG } from 'constants/config.const'
import { Fragment } from 'react'
import { SEO } from './seo'

interface Props {
  title?: string
  flex?: boolean
}

const Layout: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <SEO title={props.title || CONFIG.title} />
      <div className="flex flex-col max-w-2xl min-h-screen p-12 mx-auto">
        <h1 className="text-2xl text-center text-purple-600 font-display">
          ShareCode
        </h1>
        <div className="w-6 h-6" />
        <main
          className={[props.flex ? 'flex flex-col flex-auto' : ''].join(' ')}
        >
          {props.children}
        </main>
      </div>
    </Fragment>
  )
}

export { Layout }
