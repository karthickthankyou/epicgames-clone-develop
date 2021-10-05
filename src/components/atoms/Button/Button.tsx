export interface IButtonProps {
  children: string
  variant?: 'containedPrimary' | 'outlinedPrimary' | 'outlinedWhite'
  size?: 'lg' | 'md' | 'sm'
  fullWidth?: boolean
}

const variants = {
  containedPrimary: 'bg-primary-600 text-white rounded hover:bg-primary-700',
  outlinedPrimary:
    'border border-primary-500 text-primary-300 rounded hover:bg-primary-900 hover:text-primary-100',
  outlinedWhite: 'border text-white rounded hover:bg-gray-800',
}

const sizes = {
  lg: 'px-4 py-2.5',
  md: 'text-sm px-3 py-1.5',
  sm: 'text-xs px-2 py-1',
}

const Button = ({
  variant = 'containedPrimary',
  size = 'md',
  fullWidth = false,
  children,
}: IButtonProps) => (
  <button
    type='button'
    className={`uppercase transform transition-all ${variants[variant]} ${
      sizes[size]
    } ${fullWidth && 'w-full'}`}
  >
    {children}
  </button>
)

export default Button
