import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'

export interface IModernBrowseSectionProps {
  items: { id: string; title: string; subtitle: string }[]
}

const ModernBrowseSection = ({ items }: IModernBrowseSectionProps) => {
  const [selectedId, setSelectedId] = useState('')
  return (
    <AnimateSharedLayout type='crossfade'>
      {items.map((item) => (
        <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h2>{items[+selectedId].title}</motion.h2>
            <motion.h5>{items[+selectedId].subtitle}</motion.h5>
            <motion.button onClick={() => setSelectedId('')} />
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default ModernBrowseSection
