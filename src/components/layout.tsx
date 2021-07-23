import { CONFIG } from 'constants/config.const'
import { Fragment } from 'react'
import { SEO } from './seo'

interface Props {
  title?: string
}

const Layout: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <SEO title={props.title || CONFIG.title} />
      <div className="max-w-2xl p-12 mx-auto">
        <h1 className="text-2xl text-center font-display">ShareCode</h1>
        <div className="w-6 h-6" />
        {props.children}
      </div>
    </Fragment>
  )
}

export { Layout }
