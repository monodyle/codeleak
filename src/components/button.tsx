import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'normal' | 'small'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const Button = (props: Props) => {
  const { className, variant = 'normal', ...rest } = props

  const styles: { [K in ButtonVariant as string]: string[] } = {
    normal: [
      'bg-purple-500 border border-gray-500',
      'rounded-md leading-9 px-4',
      'font-medium text-white',
      // hover
      'hover:bg-purple-600',
      // focus
      'focus:bg-purple-600',
      // disabled
      'disabled:bg-purple-300 disabled:border-purple-400 disabled:cursor-not-allowed',
    ],
    small: [
      'flex items-center text-xs text-purple-700 font-medium',
      'px-2 py-1 bg-purple-100 rounded ',
      // hover
      'hover:bg-purple-200',
      // focus
      'focus:bg-purple-200 focus:ring focus:ring-purple-400 focus:ring-offset-2 focus:outline-none',
      //
      'target:bg-purple-300',
    ],
  }

  return (
    <button className={[...styles[variant], className].join(' ')} {...rest} />
  )
}

export { Button }
