import { Children } from 'src/types'

export interface IAnimationsProps {
  className?: string
  children?: Children
}

const Animations = ({ className, children }: IAnimationsProps) => (
  <div data-chromatic='ignore' className={`${className} `}>
    {children}
  </div>
)

export default Animations
