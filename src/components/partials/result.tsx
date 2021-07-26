import { patterns } from 'constants/pattern.const'

interface Props {
  children: string
}

const Result = ({ children }: Props) => {
  return (
    <div className="relative p-4 border-2 border-purple-200 rounded-md bg-purple-50 bg-opacity-20 pt-7">
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
