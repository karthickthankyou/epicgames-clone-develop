import { motion } from 'framer-motion'
import { useCarouselTimer } from '../../../hooks'
import { selectGames2 } from '../../../store/gamesSlice'
import { useAppSelector } from '../../../store/hooks'
import { CAROUSEL_DURATION } from '../../../utils'

export interface IHomeShowcaseProps {}

const HomeShowcase = () => {
  const games = useAppSelector(selectGames2).slice(0, 6)
  const [imageId, setImageId] = useCarouselTimer({
    duration: 4000,
    itemsLength: games.length,
  })

  return (
    <div className='md:flex h-96'>
      <div className='relative flex flex-col flex-grow '>
        {games.map((game, index) => (
          <>
            {imageId === index && (
              <>
                <div className='flex flex-col h-full p-12 bg-gradient-to-tr from-black via-transparent'>
                  <div className='mt-auto'>
                    <img
                      src={games[imageId].subImageUrl}
                      className='object-cover w-48 h-auto '
                      alt=''
                    />
                    <div className='mt-6 drop-shadow-md'>
                      {games[imageId].title}
                    </div>

                    <div className='mt-4 w-96 line-clamp-4'>
                      {games[imageId].description}
                    </div>
                  </div>

                  <div className='flex mt-16 text-sm'>
                    <button
                      type='button'
                      className='px-4 py-2 mr-0.5 uppercase bg-blue-600 rounded-l hover:bg-blue-700'
                    >
                      Buy now
                    </button>
                    <button
                      type='button'
                      className='px-4 py-2 bg-blue-600 rounded-r hover:bg-blue-700'
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className='absolute inset-0 overflow-hidden -z-10'>
                  <motion.img
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.06 }}
                    transition={{
                      duration: CAROUSEL_DURATION,
                      ease: 'easeOut',
                    }}
                    src={games[imageId].imageUrl}
                    alt=''
                    className='object-contain w-full h-full'
                  />
                </div>
              </>
            )}
          </>
        ))}
      </div>
      <div className='relative flex h-full pl-1 bg-gray-900 md:flex-col'>
        {games.map((game, index) => (
          <div
            className={`relative overflow-hidden w-full h-16 md:h-full md:w-16 flex-1 p-1 ${
              index === imageId && 'bg-blue-900'
            }`}
          >
            <button
              type='button'
              onClick={() => setImageId(index)}
              tabIndex={0}
              className='w-full'
            >
              <img
                className='object-cover rounded cursor-pointer'
                src={game.imageUrl}
                alt=''
              />
            </button>
            {index === imageId && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                  duration: CAROUSEL_DURATION,
                  ease: 'linear',
                }}
                className='absolute bottom-0 h-1 -mx-1 bg-blue-600'
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeShowcase
