import { motion } from 'framer-motion'
import { useState } from 'react'
import { useCarouselTimer } from '../../../hooks'
import { selectHomeScreenGames } from '../../../store/gamesSlice'
import { useAppSelector } from '../../../store/hooks'
import { CAROUSEL_DURATION } from '../../../utils'

export interface IHomeShowcaseProps {}

const HomeShowcase = () => {
  const games = useAppSelector(selectHomeScreenGames)
  const [imageId, setImageId] = useCarouselTimer({
    duration: CAROUSEL_DURATION * 1000,
    itemsLength: games.length,
  })
  const [muted, setMuted] = useState<boolean>(true)
  return (
    <>
      <div className='relative overflow-hidden rounded aspect-w-16 lg:aspect-h-6 md:aspect-h-8 aspect-h-16 sm:aspect-h-12'>
        {games.map((game, index) => (
          <>
            {/* <button
              type='button'
              onClick={() => setMuted((state) => !state)}
              className='z-20'
            >
              Mute
            </button> */}
            {/* <motion.img
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.06 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: CAROUSEL_DURATION,
                ease: 'easeOut',
              }}
              src={games[imageId].imageUrl}
              alt=''
              className='absolute inset-0 object-cover object-top -z-10'
            /> */}
            <div key={game.id}>
              {imageId === index && (
                <div className='flex flex-col h-full p-2 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-tr from-black'>
                  <div className='absolute inset-0 z-0 ' />
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  {/* <video
                    autoPlay
                    className='absolute inset-0 object-cover w-full h-full -z-10'
                    src='https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/videos%2Fvideo.mp4?alt=media'
                  >
                    Your browser does not support the video tag.
                  </video> */}

                  <div
                    style={{
                      position: 'absolute',
                      height: '200%',
                      top: '-40%',
                      width: '200%',
                      left: '-50%',
                    }}
                  >
                    <iframe
                      title='hello'
                      // src='https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1'
                      src={`https://www.youtube.com/embed/${game.homeScreen}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&&mute=${muted}&start=10&end=60&playlist=${game.homeScreen}`}
                      frameBorder='0'
                      allowFullScreen
                      className='absolute inset-0 w-full h-full -z-10'
                      tabIndex={-1}
                    />
                  </div>

                  <div className='z-10 mt-auto'>
                    <img
                      src={games[imageId].subImageUrl}
                      className='object-cover w-48 h-auto'
                      alt=''
                    />
                    <div className='max-w-xs mt-4 line-clamp-4'>
                      {games[imageId].description ||
                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores sunt voluptates nam repellat possimus, illum facilis dicta delectus!'}
                    </div>
                    <div className='flex mt-8 text-sm'>
                      <button
                        type='button'
                        className='mr-0.5 px-4 py-2 btn-lg bg-blue-600 rounded-l hover:bg-blue-700'
                      >
                        Buy now
                      </button>
                      <button
                        type='button'
                        className='px-4 py-2 bg-blue-600 rounded-r btn hover:bg-blue-700'
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        ))}
      </div>

      <div className='grid max-w-lg grid-cols-7 gap-1 mt-3 mb-6 ml-auto mr-3'>
        {games.map((game, index) => (
          <button
            type='button'
            onClick={() => setImageId(index)}
            tabIndex={0}
            className='w-full h-full rounded-full aspect-w-9 aspect-h-9'
          >
            <img
              className={`object-cover object-center w-full h-full p-2  rounded-full ${
                imageId === index && 'border-2 border-white shadow-xl'
              }`}
              src={game.imageUrl}
              alt=''
            />
          </button>
        ))}
      </div>
    </>
  )
}

export default HomeShowcase
