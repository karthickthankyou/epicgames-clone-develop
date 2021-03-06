import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export interface INavIconProps {
  IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
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
    className={`flex items-start h-full px-2 ${classes}`}
    to={linkTo}
  >
    <IconComponent className='w-4 h-4' />
    <div className='ml-1 text-xs leading-none text-gray-300 '>
      {count < 100 ? count : '99+'}
    </div>
  </Link>
)

export default NavIcon
