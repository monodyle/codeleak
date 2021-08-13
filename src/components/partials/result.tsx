import { Button } from 'components/button'
import { CopyIcon } from 'components/icons'
import copy from 'copy-to-clipboard'
import { useEffect, useState } from 'react'
import { isURL } from 'utils/validator'

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
    <div className="relative p-4 pt-8 border-2 border-purple-200 rounded-md bg-purple-50 bg-opacity-20">
      <Button
        variant="small"
        title="Copy"
        className="absolute top-2 right-2"
        onClick={() => {
          setCopied(true)
          copy(children)
        }}
      >
        <CopyIcon className="w-4 h-4 mr-1" /> {copied ? 'Copied' : 'Copy'}
      </Button>
      <h3 className="absolute top-0 left-0 px-2 pb-1 text-sm font-semibold text-purple-700 bg-purple-200 rounded-tl rounded-br">
        Here you are
      </h3>
      <p className="text-xl text-center text-gray-700 break-words">
        {isURL(children) ? (
          <a
            href={children}
            target="_blank"
            rel="noreferrer"
            className="block truncate"
          >
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
