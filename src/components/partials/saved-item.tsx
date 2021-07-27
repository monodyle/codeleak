import { CheckIcon, CopyIcon, ExternalLinkIcon } from 'components/icons'
import copy from 'copy-to-clipboard'
import { useEffect, useState } from 'react'
import { dateFormat } from 'utils/formatter'

interface Props {
  code: string
  url: string
  created_at: string
}

export const SavedItem = (props: Props) => {
  const { code, url, created_at } = props
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (copied) setCopied(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className="flex justify-between px-4 py-2 border border-gray-100 rounded-lg flex-wrap">
      <div className="w-1/4">
        <div className="text-xs font-medium text-gray-400 uppercase">Code</div>
        <div className="flex items-center text-gray-700">
          <p className="font-medium">{code}</p>
          <div className="w-1" />
          <button
            onClick={() => {
              copy(code)
              setCopied(true)
            }}
            disabled={copied}
            className={copied ? 'text-purple-500' : ''}
          >
            {copied ? (
              <CheckIcon className="w-4 h-4" />
            ) : (
              <CopyIcon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
      <div className="w-3/4">
        <div className="text-xs font-medium text-gray-400 uppercase">URL</div>
        <div className="font-medium">
          <a
            href={url}
            className="inline-flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <p className="block truncate">{url}</p>
            <ExternalLinkIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
      <p className="w-full pt-2 text-gray-500 text-sm">
        Created at {dateFormat(created_at)}
      </p>
    </div>
  )
}
