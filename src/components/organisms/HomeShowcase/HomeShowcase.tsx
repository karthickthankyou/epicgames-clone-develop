import { motion } from 'framer-motion'
import { useCarouselTimer } from '../../../hooks'
import { selectGames2 } from '../../../store/gamesSlice'
import { useAppSelector } from '../../../store/hooks'
import { CAROUSEL_DURATION } from '../../../utils'

export interface IHomeShowcaseProps {}

const HomeShowcase = () => {
  const games = useAppSelector(selectGames2).slice(0, 6)
  const [imageId, setImageId] = useCarouselTimer({
    duration: CAROUSEL_DURATION * 100000,
    itemsLength: games.length,
  })

  return (
    <div className='md:flex h-96'>
      <div className='relative overflow-hidden rounded md:flex-grow h-96'>
        <div className='absolute inset-0'>
          {games.map((game, index) => (
            <div key={game.id} className='h-full'>
              {imageId === index && (
                <>
                  <div className='absolute inset-0 flex flex-col h-full p-12 bg-gradient-to-tr from-black via-transparent'>
                    <div className='mt-auto'>
                      <img
                        src={games[imageId].subImageUrl}
                        className='object-cover w-48 h-auto'
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
                      className='object-cover object-top w-full h-full'
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex items-stretch pl-1 bg-gray-900 md:h-full md:flex-col'>
        {games.map((game, index) => (
          <div
            key={game.id}
            className={`relative overflow-hidden rounded-lg w-full h-full md:w-16 flex-1  aspect-w-6 aspect-h-1 ${
              index === imageId && 'bg-white bg-opacity-40'
            }`}
          >
            <button
              type='button'
              onClick={() => setImageId(index)}
              tabIndex={0}
              className='w-full h-full p-1 overflow-hidden'
            >
              <img
                className='object-cover object-center w-full h-full rounded'
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
                className='absolute bottom-0 h-1 -mx-1 bg-white'
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeShowcase
