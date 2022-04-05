import GameCard04 from '@molecules/GameCard04'
import { ReactComponent as GiftIcon } from '@assets/svgs/gift.svg'
import { getImageUrl } from '@utils/index'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'

export interface IGameCard04SectionProps {}

const GameCard04Section = () => {
  const { date, nextWeek } = useMemo(() => {
    const today = new Date()
    const twoDaysBack = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 2
    ).toISOString()
    const nextWeekLocal = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 5
    ).toISOString()
    return { date: twoDaysBack, nextWeek: nextWeekLocal }
  }, [])

  return (
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
        <GameCard04
          id='306'
          date={date}
          displayImage={getImageUrl('306').imageUrl}
          gameTitle='3 out of 10, EP 3: "Pivot Like A Champion"'
          free
        />
        <GameCard04
          id='460'
          date={date}
          displayImage={getImageUrl('460').imageUrl}
          gameTitle='Cardpocalypse'
          free
        />
        <GameCard04
          date={nextWeek}
          displayImage='https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/custom%2Fgift.jpeg?alt=media&token=32605241-d3f6-4306-b208-913cfacf6d6d'
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
}

export default GameCard04Section
