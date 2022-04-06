/* eslint-disable react/jsx-props-no-spreading */
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'

type ButtonSizes = 'none' | 'sm' | 'md' | 'lg' | 'xl'

export type IButtonProps = {
  size?: ButtonSizes
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'green' | 'red' | 'white' | 'black'
  fullWidth?: boolean
  isLoading?: boolean
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const variantColor = {
  contained: {
    primary: 'text-white bg-primary hover:bg-primary-600',
    white: 'text-black bg-white',
    black: 'text-white bg-black hover:bg-gray-900',
    green: 'text-white bg-green-600 hover:bg-green-700',
    red: 'text-white bg-red-500 hover:bg-red-700',
  },

  outlined: {
    primary: 'border-2 border-primary text-primary ',
    white: 'border-2 border-white text-white',
    black: 'border-2 border-black text-black',
    green: 'border-2 border-green text-green-600 ',
    red: 'border-2 border-red text-red-600 ',
  },
  text: {
    primary: 'text-primary ',
    white: 'text-black',
    black: 'text-white',
    green: 'text-green-600 ',
    red: 'text-red-600 ',
  },
}

const sizes: { [key in ButtonSizes]: string } = {
  none: 'text-sm',
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2 text-base',
  xl: 'px-8 py-3 text-xl',
}

const Button = ({
  size = 'md',
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  children,
  className,
  isLoading = false,
  type = 'button',
  ...props
}: IButtonProps) => {
  const variantCls = variantColor[variant][color]
  const sizeCls = variant === 'text' ? sizes.none : sizes[size]

  const fwCls = fullWidth && 'w-full'
  const disCls = (disabled || isLoading) && 'opacity-60 cursor-auto'

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled || isLoading}
      className={`rounded-sm relative font-medium ${sizeCls} ${fwCls} ${variantCls} ${disCls}  ${className} `}
      {...props}
    >
      {isLoading ? (
        <>
          <div className='absolute inset-0 flex items-center justify-center'>
            <RefreshIcon className='w-5 h-5 animate-spin-reverse' />
          </div>
          <span className='opacity-20'>{children}</span>
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  )
}

export default Button
