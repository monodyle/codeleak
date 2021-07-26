interface Props {
  children: any
}

export const Error = ({ children }: Props) => {
  return (
    <div className="relative p-4 border-2 border-red-200 rounded-md bg-red-50 bg-opacity-20 pt-7">
      <h3 className="absolute top-0 left-0 px-2 pb-1 text-sm font-semibold text-red-700 bg-red-200 rounded-tl rounded-br">
        Error
      </h3>
      {typeof children === 'object' ? JSON.stringify(children) : children}
    </div>
  )
}
