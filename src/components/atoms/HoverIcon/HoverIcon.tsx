import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

export interface IHoverIconProps {
  hintText: string
  IconComponent: React.ReactElement
}

const HoverIcon = ({ hintText, IconComponent }: IHoverIconProps) => {
  const [showHint, setShowHint] = useState(false)
  return (
    <button
      type='button'
      className='relative mr-2'
      onMouseEnter={() => setShowHint(true)}
      onMouseLeave={() => setShowHint(false)}
    >
      {IconComponent}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className='absolute right-0 py-2 text-sm uppercase cursor-text bottom-full whitespace-nowrap '
          >
            {hintText}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default HoverIcon
