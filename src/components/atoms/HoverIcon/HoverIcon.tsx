import React, { useState } from 'react'
import { IconType } from 'react-icons'

export interface IHoverIconProps {
  hintText: string
  IconComponent: IconType
  position?: 'left' | 'top' | 'bottom' | 'right'
  classes?: string
}

const HoverIcon = ({
  hintText,
  IconComponent,
  position = 'top',
  classes = '',
}: IHoverIconProps) => {
  const [showHint, setShowHint] = useState(false)
  return (
    <button
      type='button'
      className={`relative ${classes}`}
      onMouseEnter={() => setShowHint(true)}
      onMouseLeave={() => setShowHint(false)}
    >
      <div className='p-1 bg-black bg-opacity-50 rounded-full hover:bg-opacity-100'>
        <IconComponent />
      </div>

      <div
        className={`absolute px-2 py-1 text-xs transition-all pointer-events-none uppercase transform bg-black rounded-sm whitespace-nowrap ${
          showHint ? 'translate-y-0 opacity-100 ' : 'translate-y-2 opacity-0 '
        }
                  ${
                    position === 'top' &&
                    '-translate-x-2/4 left-2/4 bottom-full mb-2'
                  }
                  ${
                    position === 'left' && 'right-full top-0 mr-2 translate-y-0'
                  }
        `}
      >
        {hintText}
      </div>
    </button>
  )
}

export default HoverIcon
