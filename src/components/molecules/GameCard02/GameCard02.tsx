import { Game } from 'src/types'
import { Price } from 'src/components/atoms'

export interface IGameCard02Props {
  game: Game
  classes?: string
}

const GameCard02 = ({
  game: { title, imageUrl, description, discount, sections },
  classes,
}: IGameCard02Props) => (
  <div
    className={`bg-gray-800 rounded-sm min-w-24 md:w-full md:min-w-full hover:bg-gray-700 ${
      classes && classes
    }`}
  >
    <img
      src={imageUrl}
      className='object-cover w-full transition-all rounded-b-sm cursor-pointer h-60 filter hover:brightness-125'
      alt=''
    />
    <div className='p-4'>
      <p className='w-full max-w-sm text-lg line-clamp-2'>{title}</p>
      <p className='max-w-sm mt-2 text-sm text-gray-300 line-clamp-3'>
        {description}
      </p>
      <Price
        price={20}
        discount={discount}
        sections={sections}
        classes='mt-4'
      />
    </div>
  </div>
)

export default GameCard02
