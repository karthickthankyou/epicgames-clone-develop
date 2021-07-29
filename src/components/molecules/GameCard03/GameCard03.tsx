import { useState } from 'react'
import { getInCart, getWishlisted } from '../../../utils'
import HoverIcon from '../../atoms/HoverIcon'
import Price, { IPriceProps } from '../../atoms/Price'

export interface IGameCard03Props {
  gameTitle: string
  priceInfo: IPriceProps
  displayImage: string
  wishlisted?: boolean
  inCart?: boolean
}

const GameCard03 = ({
  gameTitle,
  priceInfo,
  displayImage,
  wishlisted = false,
  inCart = false,
}: IGameCard03Props) => {
  const [cardHover, setCardHover] = useState(false)
  const { WishlistIcon, wishlistHintText } = getWishlisted(wishlisted)
  const { CartIcon, cartHintText } = getInCart(inCart)
  return (
    <div
      className='relative flex items-start overflow-hidden transition-all bg-gray-800 rounded-sm cursor-pointer hover:bg-gray-700'
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <img
        src={displayImage}
        className='object-cover w-20 h-20 rounded-sm'
        alt=''
      />

      <div className='p-2'>
        <p className='w-full max-w-xs line-clamp-2'>{gameTitle}</p>
        <Price price={priceInfo.price} />
      </div>
      {cardHover && (
        <div className='absolute right-0 z-10 flex flex-col justify-center h-full ml-auto mr-2'>
          <HoverIcon
            position='left'
            IconComponent={WishlistIcon}
            hintText={wishlistHintText}
          />
          <HoverIcon
            position='left'
            IconComponent={CartIcon}
            hintText={cartHintText}
            classes='mt-1'
          />
        </div>
      )}
    </div>
  )
}

export default GameCard03
