import { Link, useParams } from 'react-router-dom'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaDiscord,
  FaInstagramSquare,
} from 'react-icons/fa'
import { useGetGamePage, useSimilarGames } from '../../../firebase/hooks'
import {
  selectGamePage,
  selectGamePageSimilarGames,
} from '../../../store/gamesSlice'
import { useAppSelector } from '../../../store/hooks'
import GamePageFeatureBox from '../../atoms/GamePageFeatureBox'
import GameCard05 from '../../molecules/GameCard05'
import Specifications from '../../molecules/Specifications'
import ReviewSection from '../../organisms/ReviewSection'
import GameCard01Section from '../../organisms/GameCard01Section'
import { useDocumentTitle } from '../../../hooks'

export interface IGamePageProps {}

const GamePage = () => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const game = useAppSelector(selectGamePage)
  const similarGames = useAppSelector(selectGamePageSimilarGames)
  //   console.log('similarGames ', similarGames)
  useDocumentTitle(`${game?.title} - Epic clone` || 'Game Page')

  const { id } = useParams<{ id: string }>()

  useGetGamePage(id)
  useSimilarGames(game?.items)
  //   if (game) let features = [{ title: 'Genres', value: game.tags.join(', ') }]

  return (
    <div>
      {game && (
        <>
          <div className='my-3 text-4xl'>{game.title}</div>
          <div className='grid grid-cols-3 gap-10'>
            <div className='col-span-2'>
              <div className='mt-6 bg-black aspect-w-16 aspect-h-9'>
                <img
                  className='object-cover w-full h-full'
                  src={game.imageUrl}
                  alt=''
                />
              </div>
              <div className='my-4 text-lg'>{game.description}</div>
              <div className='grid grid-cols-2 my-4'>
                <GamePageFeatureBox
                  title='Genres'
                  value={game.tags.join(', ')}
                />
                <GamePageFeatureBox title='Features' value='-' />
                <GamePageFeatureBox
                  title='Platforms'
                  value={game.platform.join(', ')}
                />
              </div>
              <div className='my-6'>
                {game.longDesc.map((descItem) => (
                  <div
                    key={descItem}
                    className={`mb-2 ${
                      descItem.length < 80
                        ? 'mt-4 font-semibold'
                        : 'text-gray-400 text-sm'
                    }`}
                  >
                    {descItem}
                  </div>
                ))}
              </div>
              <div className='my-6'>
                <div className='text-xl'>Follow us</div>
                <div className='flex justify-center p-6 mt-2 space-x-10 bg-gray-800'>
                  <Link to='/to'>
                    <FaFacebookSquare className='w-6 h-6 text-gray-400 hover:text-gray-50' />
                  </Link>
                  <Link to='/to'>
                    <FaTwitterSquare className='w-6 h-6 text-gray-400 hover:text-gray-50' />
                  </Link>
                  <Link to='/to'>
                    <FaDiscord className='w-6 h-6 text-gray-400 hover:text-gray-50' />
                  </Link>
                  <Link to='/to'>
                    <FaInstagramSquare className='w-6 h-6 text-gray-400 hover:text-gray-50' />
                  </Link>
                </div>
              </div>
              <div className='my-6'>
                <div className='text-xl'>Specifications</div>
                <Specifications />
              </div>
              <div className='my-6'>
                <div className='text-xl font-semibold'>Reviews</div>
                <ReviewSection />
              </div>
            </div>
            <div className='col-span-1'>
              <div className='sticky top-24'>
                <GameCard05 game={game} />
              </div>
            </div>
          </div>
          <div className='my-6'>
            <GameCard01Section games={similarGames} heading='Similar Games' />
          </div>
        </>
      )}
    </div>
  )
}

export default GamePage
