import { HiGift } from 'react-icons/hi'
import GameCard04 from '../../molecules/GameCard04'

export interface IGameCard04SectionProps {}

const GameCard04Section = () => (
  <div className='p-8 bg-gray-800'>
    <div className='flex items-center justify-between'>
      <div>
        <HiGift className='inline w-8 h-8 mb-2 mr-2 text-gray-300 hover:text-white' />
        Free Games
      </div>
      <button type='button' className='outline btn-lg btn'>
        View More
      </button>
    </div>
    <div className='flex flex-col mt-6 space-y-6 md:flex-row md:space-x-6 md:space-y-0 '>
      <GameCard04
        date='2021-06-10T08:30:00Z'
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyberpunk 2077'
        free
      />
      <GameCard04
        date='2021-06-10T08:30:00Z'
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyberpunk 2077'
        free
      />
      <GameCard04
        date='2021-06-17T08:30:00Z'
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyberpunk 2077'
      />
      {/* <GameCard04
            date="2021-06-10T08:30:00Z"
            displayImage="static/media/game.e4f1f703.jpg"
            gameTitle="Cyberpunk 2077"
          /> */}
    </div>
  </div>
)

export default GameCard04Section
