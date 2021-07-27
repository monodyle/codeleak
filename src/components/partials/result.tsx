import { CopyIcon } from 'components/icons'
import { patterns } from 'constants/pattern.const'
import copy from 'copy-to-clipboard'
import { useEffect, useState } from 'react'

interface Props {
  children: string
}

const Result = ({ children }: Props) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (copied) setCopied(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className="relative p-4 border-2 border-purple-200 rounded-md bg-purple-50 bg-opacity-20 pt-7">
      <button
        className={[
          'flex items-center text-xs text-purple-700 font-medium',
          'absolute px-2 py-1 bg-purple-100 rounded top-2 right-2',
          // hover
          'hover:bg-purple-200',
          // focus
          'focus:bg-purple-200 focus:ring focus:ring-purple-400 focus:ring-offset-2 focus:outline-none',
          //
          'target:bg-purple-300',
        ].join(' ')}
        title="Copy"
        onClick={() => {
          setCopied(true)
          copy(children)
        }}
      >
        <CopyIcon className="w-4 h-4 mr-1" /> {copied ? 'Copied' : 'Copy'}
      </button>
      <h3 className="absolute top-0 left-0 px-2 pb-1 text-sm font-semibold text-purple-700 bg-purple-200 rounded-tl rounded-br">
        Here you are
      </h3>
      <p className="text-xl text-center text-gray-700 break-words">
        {patterns.url.test(children) ? (
          <a href={children} target="_blank" rel="noreferrer">
            {children}
          </a>
        ) : (
          children
        )}
      </p>
    </div>
  )
}

export { Result }
