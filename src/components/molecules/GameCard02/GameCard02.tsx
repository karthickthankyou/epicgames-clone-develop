import Price, { IPriceProps } from '../../atoms/Price'

export interface IGameCard02Props {
  gameTitle: string
  description: string
  productionCompany: string
  priceInfo: IPriceProps
  displayImage: string
  inCart?: boolean
  wishlisted?: boolean
  classes?: string
}

const GameCard02 = ({
  gameTitle,
  description,
  displayImage,
  classes,
}: IGameCard02Props) => (
  <div
    className={`bg-gray-800 rounded-sm min-w-24 md:w-full md:min-w-full hover:bg-gray-700 ${
      classes && classes
    }`}
  >
    <img
      src={displayImage}
      className='object-cover w-full transition-all rounded-b-sm cursor-pointer h-60 filter hover:brightness-125'
      alt=''
    />
    <div className='p-4'>
      <p className='w-full max-w-sm text-lg line-clamp-2'>{gameTitle}</p>
      <p className='max-w-sm mt-2 text-sm text-gray-300 line-clamp-3'>
        {description}
      </p>
      <Price price={20} classes='mt-4' />
    </div>
  </div>
)

export default GameCard02
