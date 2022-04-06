import { motion, AnimatePresence } from 'framer-motion'
import { useCarouselTimer } from '@hooks/index'

export interface ICarouselProps {
  duration?: number
  images: string[]
}

const Carousel = ({ duration = 2000, images }: ICarouselProps) => {
  const [currentIndex, setCurrentIndex] = useCarouselTimer({
    duration,
    itemsLength: images.length,
  })

  return (
    <div>
      <div className='overflow-hidden h-96'>
        <AnimatePresence exitBeforeEnter>
          {images.map(
            (image) =>
              image === images[+currentIndex] && (
                <motion.img
                  src={image}
                  key={image}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.06 }}
                  transition={{
                    duration: 0.2,
                  }}
                  className='object-cover w-full h-full'
                />
              )
          )}
        </AnimatePresence>
      </div>
      <div className='flex gap-3 py-3 overflow-x-scroll thin-scrollbar overscroll-x-none'>
        {images.map((image, index) => (
          <motion.img
            src={image}
            key={image}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.06 }}
            transition={{
              duration: 0.2,
            }}
            onClick={() => setCurrentIndex(index)}
            className={`object-cover w-36 h-24 flex-shrink-0 transition-all ${
              index === currentIndex
                ? 'scale-125 border-2 border-white'
                : 'scale-100'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
