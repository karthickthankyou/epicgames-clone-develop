import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

export interface INavIconProps {
  IconComponent: IconType
  count: number
  linkTo: string
  classes?: string
  ariaLabel?: string
}

const NavIcon = ({
  IconComponent,
  count,
  linkTo,
  classes,
  ariaLabel,
}: INavIconProps) => (
  <Link
    aria-label={ariaLabel}
    className={`flex items-center h-full px-2 ${classes}`}
    to={linkTo}
  >
    <IconComponent />
    <div aria-label={`${ariaLabel}-count`} className='ml-1 text-gray-300'>
      {count}
    </div>
  </Link>
)

export default NavIcon
