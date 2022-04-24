import GamePageFeatureBox from '@molecules/GamePageFeatureBox/GamePageFeatureBox'
import { Link, Redirect } from 'react-router-dom'
import { ReactComponent as FacebookIcon } from '@assets/svgs/facebook.svg'
import { ReactComponent as TwitterIcon } from '@assets/svgs/twitter.svg'
import { ReactComponent as DiscordIcon } from '@assets/svgs/discord.svg'
import { ReactComponent as InstagramIcon } from '@assets/svgs/instagram.svg'
import Specifications from '@molecules/Specifications/Specifications'
import QuestionMarkCircleIcon from '@heroicons/react/solid/QuestionMarkCircleIcon'
import ReviewSection from '@organisms/ReviewSection/ReviewSection'
import { reviews } from '@utils/data'
import { getRandomNumber } from '@utils/index'
import GameCard05 from '@molecules/GameCard05/GameCard05'
import GameCard01Section from '@organisms/GameCard01Section/GameCard01Section'
import { Game } from '@epictypes/index'

export interface IGamePageTemplateProps {
  game: Game | null
  similarGames: Game[]
}

const GamePageTemplate = ({ game, similarGames }: IGamePageTemplateProps) => {
  if (!game) <Redirect to='/404' />
  return (
    <div>
      {game && (
        <>
          <div className='my-3 text-4xl'>{game.title}</div>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
            <div className='order-2 md:col-span-2 md:order-1'>
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
                {game.longDesc?.map((item) => (
                  <div
                    key={item}
                    className={`mb-2 ${
                      item.length < 80
                        ? 'mt-4 font-semibold'
                        : 'text-gray-400 text-sm'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className='my-6'>
                <div className='text-xl'>Follow us</div>
                <div className='flex justify-center p-6 mt-2 space-x-10 bg-gray-800'>
                  <Link to='/to'>
                    <FacebookIcon className='w-6 h-6 text-gray-400 hover:text-gray-50' />
                  </Link>
                  <Link to='/to'>
                    <TwitterIcon className='w-6 h-6 text-gray-400 hover:text-gray-50' />
                  </Link>
                  <Link to='/to'>
                    <DiscordIcon className='w-6 h-6 text-gray-400 hover:text-gray-50' />
                  </Link>
                  <Link to='/to'>
                    <InstagramIcon className='w-6 h-6 text-gray-400 hover:text-gray-50' />
                  </Link>
                </div>
              </div>
              <div className='my-6'>
                <div className='text-xl'>Specifications</div>
                <Specifications />
              </div>
              <div className='my-6'>
                <div className='text-xl font-semibold'>Reviews</div>
                <ReviewSection
                  averageRating={getRandomNumber(0, 100)}
                  count={getRandomNumber(3, 20000)}
                  reviews={reviews}
                />
              </div>
            </div>
            <div className='order-1 col-span-1 md:order-2'>
              <div className='sticky top-24'>
                <GameCard05 game={game} />
              </div>
            </div>
          </div>
          <div className='my-6'>
            <div className='flex items-center gap-2'>
              <QuestionMarkCircleIcon className='w-5 h-5' />
              <a
                target='_blank'
                href='https://karthickragavendran.medium.com/a-quick-content-based-recommender-system-from-a-part-time-ml-guy-3ac37d4c2d5d'
                rel='noreferrer'
              >
                How do we calculate similarity?
              </a>
            </div>
            <GameCard01Section games={similarGames} heading='Similar Games' />
          </div>
        </>
      )}
    </div>
  )
}

export default GamePageTemplate
