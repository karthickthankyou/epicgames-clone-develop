import GameCardFree from '@molecules/GameCard04'
import { ReactComponent as GiftIcon } from '@assets/svgs/gift.svg'
import { getImageUrl, getDates } from '@utils/index'
import { Link } from 'react-router-dom'

export interface IGameCard04SectionProps {
  freeGames: { id: string; date: string; imageUrl: string; title: string }[]
  mysteryGame: { date: string }[]
}

const GameCard04Section = ({
  freeGames,
  mysteryGame,
}: IGameCard04SectionProps) => (
  <div className='p-8 bg-gray-800'>
    <div className='flex items-center justify-between'>
      <div>
        <GiftIcon className='inline w-8 h-8 mb-2 mr-2 text-gray-300 hover:text-white' />
        <div className='inline-block text-xl font-semibold'>Free Games</div>
      </div>
      <Link to='/browse' className='outline '>
        View More
      </Link>
    </div>
    <div className='flex flex-col mt-6 space-y-6 md:flex-row md:space-x-6 md:space-y-0 '>
      {freeGames.map((item) => (
        <GameCardFree
          key={item.id}
          id={item.id}
          date={item.date}
          imageUrl={getImageUrl(item.id).imageUrl}
          title={item.title}
        />
      ))}
      {mysteryGame.map((item) => (
        <GameCardFree
          date={item.date}
          imageUrl='https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/custom%2Fgift.jpeg?alt=media&token=32605241-d3f6-4306-b208-913cfacf6d6d'
          mystery
        />
      ))}
    </div>
  </div>
)

export default GameCard04Section
