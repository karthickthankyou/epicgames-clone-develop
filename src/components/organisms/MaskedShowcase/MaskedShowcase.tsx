import { useRef } from 'react'
// import { useScroll } from 'react-use'
import { Game } from 'src/types'
import { MaskedShowcaseCard } from 'src/components/molecules'
import { slug } from '../../../utils'

export interface IMaskedShowcaseProps {
  games: Game[]
  title: string
  comment: string
  keyUnit: keyof Game
}

const MaskedShowcase = ({
  games,
  title,
  comment,
  keyUnit,
}: IMaskedShowcaseProps) => {
  const scrollRef = useRef(null)
  // const { x, y } = useScroll(scrollRef)
  return (
    <div className='my-6' id='gameCardSection01'>
      <div className='inline-block text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-blue-300 via-blue-600 to-green-700'>
        {title}
      </div>
      <div
        data-testid={slug(title)}
        className='flex mt-6 space-x-6 overflow-x-scroll '
        ref={scrollRef}
      >
        {games.map((game) => (
          <MaskedShowcaseCard
            key={game.id}
            game={game}
            comment={comment}
            keyUnit={keyUnit}
          />
        ))}
      </div>
    </div>
  )
}

export default MaskedShowcase
