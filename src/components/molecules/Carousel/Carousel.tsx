import { motion, AnimatePresence } from 'framer-motion'
import { useCarouselTimer } from '../../../hooks'

export interface ICarouselProps {
  image: string
}

export const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useCarouselTimer({
    duration: 4000,
    itemsLength: images.length,
  })

  return (
    <div>
      <div className='overflow-hidden h-96'>
        <AnimatePresence exitBeforeEnter>
          {images.map(
            (image) =>
              image === images[currentIndex] && (
                <motion.img
                  src={image}
                  key={image}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.06 }}
                  transition={{
                    duration: 0.2,
                  }}
                  className='w-full'
                />
              )
          )}
        </AnimatePresence>
      </div>
      <div className='grid grid-cols-3 h-36'>
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
            className={`object-cover w-full ${
              image === images[currentIndex] ? 'scale-110' : 'scale-90'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
