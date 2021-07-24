import { ButtonHTMLAttributes } from 'react'

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, ...rest } = props
  return (
    <button
      className={[
        'bg-purple-500 border border-gray-500',
        'rounded-md leading-9 px-4',
        'font-medium text-white',
        // hover
        'hover:bg-purple-600',
        // focus
        'focus:bg-purple-600',
        // disabled
        'disabled:bg-purple-300 disabled:border-purple-400 disabled:cursor-not-allowed',
        className,
      ].join(' ')}
      {...rest}
    />
  )
}

export { Button }
