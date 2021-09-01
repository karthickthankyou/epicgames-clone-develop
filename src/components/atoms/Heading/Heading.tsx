import { ReactElement } from 'react'

export interface IHeadingProps {
  variant: 'heading-0' | 'heading-1' | 'heading-2'
  children: string | ReactElement
}

const Heading = ({ variant, children }: IHeadingProps) => {
  const variantClasses = {
    'heading-0': 'text-lg mb-2 font-semibold',
    'heading-1': 'text-3xl mb-6 font-semibold',
    'heading-2': 'text-4xl mb-6 font-bold',
  }
  return <h1 className={`${variantClasses[variant]}`}>{children}</h1>
}

export default Heading
