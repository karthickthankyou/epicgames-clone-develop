import GameCard02 from '@molecules/GameCard02'
import { Game } from '@epictypes/index'
import { getImageUrl } from '@utils/index'

export interface IGameCard02SectionProps {
  games: Game[]
}

const GameCard02Section = ({ games }: IGameCard02SectionProps) => {
  const gamesThree = games.slice(0, 3)
  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
      {gamesThree.map((item) => (
        <GameCard02
          description={item.description}
          imageUrl={getImageUrl(item.id).imageUrl}
          title={item.title}
          price={item.price}
          discount={item.discount}
        />
      ))}
    </div>
  )
}

export default GameCard02Section
