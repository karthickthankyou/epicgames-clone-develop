import { useRef } from 'react'
import { useScroll } from 'react-use'
import { Game } from '../../../types'

import MaskedShowcaseCard from '../../molecules/MaskedShowcaseCard'

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
  const { x, y } = useScroll(scrollRef)
  return (
    <div className='my-6'>
      <div className='inline-block text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-blue-300 via-blue-600 to-green-700'>
        {title}
      </div>
      <div className='flex mt-6 space-x-6 overflow-x-scroll ' ref={scrollRef}>
        {/* eslint-disable-next-line react/destructuring-assignment */}
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
