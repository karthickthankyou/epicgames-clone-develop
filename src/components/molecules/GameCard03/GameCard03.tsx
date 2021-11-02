import { useState } from 'react'
import { Game } from 'src/types'
import { Price, HoverIcon } from 'src/components/atoms'
import { getInCart, getWishlisted } from '../../../utils'

export interface IGameCard03Props {
  game: Game
}

const GameCard03 = ({ game }: IGameCard03Props) => {
  const [cardHover, setCardHover] = useState(false)
  const { price, status, imageUrl, discount, sections, title } = game
  const { WishlistIcon, wishlistHintText } = getWishlisted(
    status === 'WISHLISTED'
  )
  const { CartIcon, cartHintText } = getInCart(status === 'IN_CART')
  return (
    <div
      className='relative flex items-start overflow-hidden transition-all bg-gray-800 rounded-sm cursor-pointer hover:bg-gray-700'
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <img
        src={imageUrl}
        className='object-cover w-20 h-20 rounded-sm'
        alt=''
      />

      <div className='p-2'>
        <p className='w-full max-w-xs line-clamp-2'>{title}</p>
        <Price price={price} discount={discount} sections={sections} />
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
