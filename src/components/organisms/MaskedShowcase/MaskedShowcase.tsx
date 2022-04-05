import { useRef } from 'react'
import { useScroll } from 'react-use'
import { slug } from '@utils/index'

import MaskedShowcaseCard from '@molecules/MaskedShowcaseCard'

export interface IMaskedShowcaseProps {
  games: { id: string; units: string }[]
  title: string
  comment: string
}

const MaskedShowcase = ({ games, title, comment }: IMaskedShowcaseProps) => {
  const scrollRef = useRef(null)
  const { x, y } = useScroll(scrollRef)
  return (
    <div className='pt-4 pb-12 mt-6 ' id='gameCardSection01'>
      <div className='inline-block text-xl font-semibold '>{title}</div>
      <div
        data-testid={slug(title)}
        className='flex mt-6 space-x-6 overflow-x-scroll thin-scrollbar'
        ref={scrollRef}
      >
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {games.map((game) => (
          <MaskedShowcaseCard
            key={game.id}
            id={game.id}
            comment={comment}
            keyUnit={game.units}
          />
        ))}
      </div>
    </div>
  )
}

export default MaskedShowcase
