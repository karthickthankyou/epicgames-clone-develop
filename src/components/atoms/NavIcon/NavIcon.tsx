import React from 'react'
import { Link } from 'react-router-dom'

export interface INavIconProps {
  IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  count: number
  linkTo: string
  ariaLabel: string
  classes?: string
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
    className={`flex items-start h-full px-2 ${classes}`}
    to={linkTo}
  >
    <IconComponent className='w-6 h-6 text-white' />
    <div className='ml-1 text-xs leading-none text-gray-300'>{count}</div>
  </Link>
)

export default NavIcon
