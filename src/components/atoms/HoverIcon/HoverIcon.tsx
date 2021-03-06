import React, { MouseEventHandler, ReactElement, useState } from 'react'
import { slug } from '@utils/index'

export interface IHoverIconProps {
  hintText: string
  IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  position?: 'left' | 'top' | 'bottom' | 'right'
  onClick?: MouseEventHandler
  classes?: string
}

const HoverIcon = ({
  hintText,
  IconComponent,
  position = 'top',
  onClick,
  classes = '',
}: IHoverIconProps) => {
  const [showHint, setShowHint] = useState(false)
  return (
    <button
      type='button'
      className={`relative ${classes}`}
      onMouseEnter={() => setShowHint(true)}
      onMouseLeave={() => setShowHint(false)}
      onClick={onClick}
      aria-label={slug(hintText)}
    >
      <div
        className={`absolute px-2 py-1 text-xs transition-all pointer-events-none uppercase transform bg-black bg-opacity-80 rounded-sm whitespace-nowrap  ${
          showHint ? 'translate-y-0 opacity-100 ' : 'translate-y-2 opacity-0 '
        }
        ${position === 'top' && '-translate-x-2/4 left-2/4 bottom-full mb-2'}
        ${position === 'bottom' && '-translate-x-2/4 left-2/4 top-0-full mt-2'}
        ${position === 'right' && 'left-full top-0 ml-2 translate-y-0'}
        ${position === 'left' && 'right-full top-0 mr-2 translate-y-0'}
        `}
      >
        {hintText}
      </div>
      <div className='p-1 bg-black rounded-full bg-opacity-60 hover:bg-opacity-100'>
        <IconComponent className='w-4 h-4' />
      </div>
    </button>
  )
}

export default HoverIcon
