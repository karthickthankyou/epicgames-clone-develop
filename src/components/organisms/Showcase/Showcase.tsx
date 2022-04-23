import { useCarouselTimer } from '@hooks/index'
import { CAROUSEL_DURATION } from '@utils/index'
import { Link } from 'react-router-dom'
import { Game } from '@epictypes/index'
import { useState } from 'react'

export interface IShowcaseProps {
  games: Game[]
}

const Showcase = ({ games }: IShowcaseProps) => {
  const [imageId, setImageId] = useCarouselTimer({
    duration: CAROUSEL_DURATION * 1000,
    itemsLength: games.length,
  })

  const selectedGame = games[imageId]
  const [muted, setMuted] = useState<boolean>(true)

  return (
    <div className='relative h-screen-4/5 '>
      {selectedGame && (
        <>
          <div className='container absolute z-10 flex flex-col items-start justify-end h-full mx-auto'>
            <div>
              <img
                src={selectedGame.subImageUrl}
                className='object-cover w-48 h-auto'
                alt=''
              />
              <div className='max-w-xs mt-3 text-sm line-clamp-4'>
                {selectedGame.description ||
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores sunt voluptates nam repellat possimus, illum facilis dicta delectus!'}
              </div>
              <div className='flex mt-8 text-sm'>
                <Link
                  to={`/game/${selectedGame.id}`}
                  className='px-6 py-3 font-bold uppercase rounded bg-pos-0 hover:bg-pos-100 bg-opacity-60 bg-gradient-to-tr from-primary via-primary to-green-400'
                >
                  Buy now
                </Link>
              </div>
            </div>
            <div className='flex justify-end w-full mt-8'>
              <div className='flex gap-3 pb-4 overflow-x-scroll thin-scrollbar overscroll-x-none '>
                {games?.map((game, i) => (
                  <button
                    key={game.id}
                    type='button'
                    onClick={() => setImageId(i)}
                    tabIndex={0}
                    aria-label={game.title}
                    className='flex-shrink-0 w-16 h-16 rounded-full shadow-lg'
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
          </div>
          <div className='overflow-hidden h-screen-4/5 ultimate-width'>
            <div className='absolute w-full h-full bg-gradient-to-r from-black via-transparent' />
            <div
              style={{
                position: 'absolute',
                height: '120%',
                top: '-10%',
                width: '110%',
                left: '-5%',
              }}
            >
              <iframe
                title='.'
                // @ts-ignore
                src={`https://www.youtube.com/embed/${selectedGame.homeScreen}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&&mute=${muted}&start=10&end=60&playlist=${selectedGame.homeScreen}`}
                frameBorder='0'
                allowFullScreen
                className='h-full -z-10 ultimate-width'
                tabIndex={-1}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Showcase
