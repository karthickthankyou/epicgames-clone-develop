import { useState } from 'react'

import { useCarouselTimer } from '@hooks/index'

import { CAROUSEL_DURATION } from '@utils/index'
import { Link } from 'react-router-dom'
import { Game } from '@epictypes/index'

export interface IHomeShowcaseProps {
  games: Game[]
}

const HomeShowcase = ({ games }: IHomeShowcaseProps) => {
  const [imageId, setImageId] = useCarouselTimer({
    duration: CAROUSEL_DURATION * 1000,
    itemsLength: games.length,
  })

  const selectedGame = games[imageId]

  const [muted, setMuted] = useState<boolean>(true)

  return (
    <>
      <div className=' ultimate-width aspect-w-10 aspect-h-10 sm:aspect-h-7 md:aspect-h-8 lg:aspect-h-5'>
        <div className='flex flex-col h-full bg-gradient-to-tr from-black'>
          {selectedGame && (
            <>
              <div
                style={{
                  position: 'absolute',
                  height: '140%',
                  top: '-12%',
                  width: '160%',
                  left: '-30%',
                }}
              >
                <iframe
                  title='.'
                  // @ts-ignore
                  src={`https://www.youtube.com/embed/${selectedGame.homeScreen}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&&mute=${muted}&start=10&end=60&playlist=${selectedGame.homeScreen}`}
                  frameBorder='0'
                  allowFullScreen
                  className='absolute inset-0 w-full h-full -z-10'
                  tabIndex={-1}
                />
              </div>
              <div className='container mx-auto'>
                <div className='z-10 mt-auto'>
                  <img
                    src={selectedGame.subImageUrl}
                    className='object-cover w-48 h-auto'
                    alt=''
                  />
                  <div className='max-w-xs mt-4 text-sm line-clamp-4'>
                    {selectedGame.description ||
                      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores sunt voluptates nam repellat possimus, illum facilis dicta delectus!'}
                  </div>
                  <div className='flex mt-8 text-sm'>
                    <Link
                      to={`/game/${selectedGame.id}`}
                      className='px-4 py-2 font-bold uppercase rounded bg-pos-0 hover:bg-pos-100 bg-gradient-to-tr from-primary via-primary to-green-400'
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className='container z-20 hidden mx-auto md:block'>
            <div className='flex justify-end max-w-lg gap-3 ml-auto '>
              {games?.map((game, i) => (
                <button
                  key={game.id}
                  type='button'
                  onClick={() => setImageId(i)}
                  tabIndex={0}
                  aria-label={game.title}
                  className='w-16 h-16 rounded-full shadow-lg'
                >
                  <img
                    className={`object-cover object-center  w-full h-full rounded-full ${
                      imageId === i && 'border-2 border-white p-1'
                    }`}
                    src={game.imageUrl}
                    alt=''
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='container z-20 block mx-auto mt-2 md:hidden'>
        <div className='grid max-w-lg grid-cols-7 gap-3 ml-auto'>
          {games?.map((game, i) => (
            <button
              key={game.id}
              type='button'
              onClick={() => setImageId(i)}
              tabIndex={0}
              aria-label={game.title}
              className='w-full h-full rounded-full shadow-lg aspect-w-9 aspect-h-9'
            >
              <img
                className={`object-cover object-center w-full h-full rounded-full ${
                  imageId === i && 'border-2 border-white p-1'
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
