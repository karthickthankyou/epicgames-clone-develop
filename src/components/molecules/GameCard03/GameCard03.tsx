import { useState } from 'react'
import { getInCart, getWishlisted } from '@utils/index'
import HoverIcon from '@atoms/HoverIcon'
import Price, { IPriceProps } from '@atoms/Price'
import { Link } from 'react-router-dom'

export interface IGameCard03Props {
  id: string
  gameTitle: string
  priceInfo: IPriceProps
  displayImage: string
  wishlisted?: boolean
  inCart?: boolean
}

const GameCard03 = ({
  id,
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
    <Link
      to={`/game/${id}`}
      className='relative flex items-start overflow-hidden transition-all bg-gray-800 rounded-sm hover:bg-primary-800'
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <img
        src={displayImage}
        className='flex-shrink-0 object-cover w-20 h-24 rounded-sm'
        alt=''
      />

      <div className='p-3'>
        <p className='w-full max-w-xs font-semibold line-clamp-2'>
          {gameTitle}
        </p>
        <Price price={priceInfo.price} />
      </div>
    </Link>
  )
}

export default GameCard03

// {
//   cardHover && (
//     <div className='absolute right-0 z-10 flex flex-col justify-center h-full ml-auto mr-2'>
//       <HoverIcon
//         position='left'
//         IconComponent={WishlistIcon}
//         hintText={wishlistHintText}
//       />
//       <HoverIcon
//         position='left'
//         IconComponent={CartIcon}
//         hintText={cartHintText}
//         classes='mt-1'
//       />
//     </div>
//   )
// }
