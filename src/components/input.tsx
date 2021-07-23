import { InputHTMLAttributes } from 'react'

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...rest } = props
  return (
    <input
      className={[
        'bg-transparent bg-gray-100 bg-opacity-50 border border-gray-200',
        'rounded-md leading-9 px-2',
        // hover
        'hover:bg-opacity-100',
        // focus
        'focus:bg-opacity-100 focus:ring focus:ring-purple-400 focus:ring-offset-2 focus:outline-none',
        className,
      ].join(' ')}
      {...rest}
    />
  )
}

export { Input }
