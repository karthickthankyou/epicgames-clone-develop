import { useState } from 'react'

import { useCarouselTimer } from '@hooks/index'
import { selectHomeScreenGames } from '@store/gamesSlice'
import { useAppSelector } from '@store/hooks'
import { CAROUSEL_DURATION } from '@utils/index'
import { Link } from 'react-router-dom'

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
      <div className='relative overflow-hidden rounded-t aspect-w-16 lg:aspect-h-7 md:aspect-h-9 aspect-h-16 sm:aspect-h-12'>
        {games.map((game, index) => (
          <div key={game.id}>
            {imageId === index && (
              <div className='flex flex-col h-full p-2 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-tr from-black'>
                <div className='absolute inset-0 z-0 ' />
                <div
                  style={{
                    position: 'absolute',
                    height: '140%',
                    top: '-26%',
                    width: '160%',
                    left: '-30%',
                  }}
                >
                  <iframe
                    title='.'
                    // src='https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1'
                    // @ts-ignore
                    src={`https://www.youtube.com/embed/${game.homeScreen}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&&mute=${muted}&start=10&end=60&playlist=${game.homeScreen}`}
                    frameBorder='0'
                    allowFullScreen
                    className='absolute inset-0 w-full h-full -z-10'
                    tabIndex={-1}
                  />
                </div>
                <div className='z-10 mt-auto'>
                  <img
                    src={games[+imageId].subImageUrl}
                    className='object-cover w-48 h-auto'
                    alt=''
                  />
                  <div className='max-w-xs mt-4 line-clamp-4'>
                    {games[+imageId].description ||
                      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores sunt voluptates nam repellat possimus, illum facilis dicta delectus!'}
                  </div>
                  <div className='flex mt-8 text-sm'>
                    <Link
                      to={`/game/${game.id}`}
                      className='px-4 py-2 font-bold uppercase rounded bg-pos-0 hover:bg-pos-100 bg-gradient-to-tr from-primary via-primary to-green-400'
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='z-20 p-2 mb-6 bg-white rounded-b bg-opacity-10'>
        <div className='grid max-w-lg grid-cols-7 gap-2 ml-auto'>
          {games.map((game, index) => (
            <button
              key={game.id}
              type='button'
              onClick={() => setImageId(index)}
              tabIndex={0}
              aria-label={game.title}
              className='w-full h-full rounded-full shadow-lg aspect-w-9 aspect-h-9'
            >
              <img
                className={`object-cover object-center w-full h-full rounded-full ${
                  imageId === index && 'border-2 border-white p-1'
                }`}
                src={game.imageUrl}
                alt=''
              />
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomeShowcase
