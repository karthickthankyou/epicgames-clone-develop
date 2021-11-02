import { MouseEventHandler, ReactElement } from 'react'

export interface IButtonProps {
  children: ReactElement | string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'success' | 'error'
  fullWidth?: boolean
  disabled?: boolean
  onClickAction?: MouseEventHandler<HTMLButtonElement>
  classes?: string
}

const variantColor = {
  contained: {
    primary: 'text-white bg-primary-600 hover:bg-primary-700',
    success: 'text-white bg-green-600 hover:bg-green-700',
    error: 'text-white bg-red-600 hover:bg-red-700',
  },

  outlined: {
    primary:
      'border-2 border-primary-400 text-primary-400 hover:bg-primary-900',
    success: 'border-2 border-green-400 text-green-400 hover:bg-green-900',
    error: 'border-2 border-red-400 text-red-400 hover:bg-red-900',
  },
  text: {
    primary: 'text-primary-400 hover:bg-primary-900',
    success: 'text-green-400 hover:bg-green-900',
    error: 'text-red-400 hover:bg-red-900',
  },
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2 text-base',
}

const Button = ({
  size = 'md',
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  children = '',
  onClickAction = () => console.error('onClick not implemented'),
  classes = '',
}: IButtonProps) => {
  const sizeCls = sizes[size]
  const variantCls = variantColor[variant][color]

  const fwCls = fullWidth && 'w-full'
  const disCls = disabled && 'opacity-50 cursor-auto'

  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClickAction}
      className={`uppercase  rounded-sm ${sizeCls} ${fwCls} ${variantCls} ${disCls} ${classes} `}
    >
      {children}
    </button>
  )
}

export default Button
