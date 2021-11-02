import { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import { updateUserGames } from 'src/store/userGames'
import { Price, HoverIcon } from 'src/components/atoms'
import { selectUser } from 'src/store/user'
import { useAppDispatch, useAppSelector } from 'src/store'
import { Game } from 'src/types'
import { BriefcaseIcon } from 'src/assets'
import { getInCart, getWishlisted, readable } from '../../../utils'

export interface ICard01Props {
  game: Game
}

const GameCard01 = ({ game }: ICard01Props) => {
  const {
    id,
    title,
    discount,
    imageUrl,
    status,
    price,
    publisherId,
    sections,
    similarity,
  } = game
  const wishlisted = status === 'WISHLISTED'
  const inCart = status === 'IN_CART'
  const purchased = status === 'PURCHASED'

  const [hover, setHover] = useState(false)
  const {
    data: { uid },
  } = useAppSelector(selectUser)
  const history = useHistory()

  const { WishlistIcon, wishlistHintText } = getWishlisted(wishlisted)
  const { CartIcon, cartHintText } = getInCart(inCart)
  const dispatch = useAppDispatch()

  return (
    <div
      className='relative'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {similarity && (
        <div className='absolute z-10 px-1 bg-black rounded-br-md bg-opacity-70'>
          {similarity}%
        </div>
      )}
      <div
        className={`absolute right-0  z-10 opacity-0 flex m-1 ${
          hover && 'opacity-100'
        }`}
      >
        {purchased ? (
          <HoverIcon
            IconComponent={BriefcaseIcon}
            hintText='Purchased'
            classes='mr-1'
          />
        ) : (
          <>
            <HoverIcon
              key={wishlistHintText}
              IconComponent={WishlistIcon}
              hintText={wishlistHintText}
              classes='mr-1'
              onClick={() =>
                dispatch(
                  updateUserGames({
                    uid: uid || '',
                    gameId: id,
                    status: wishlisted ? 'REMOVED_FROM_WISHLIST' : 'WISHLISTED',
                    history,
                  })
                )
              }
            />
            <HoverIcon
              key={cartHintText}
              IconComponent={CartIcon}
              hintText={cartHintText}
              onClick={() =>
                dispatch(
                  updateUserGames({
                    uid: uid || '',
                    gameId: id,
                    status: inCart ? 'REMOVED_FROM_CART' : 'IN_CART',
                    history,
                  })
                )
              }
            />
          </>
        )}
      </div>

      <Link to={`/game/${game.id}`}>
        <div className='aspect-w-3 aspect-h-4'>
          <img
            src={imageUrl}
            alt=''
            // transition-all transform filter hover:brightness-120
            className='object-cover object-center rounded-lg'
          />
        </div>
        <div className='mt-3 font-semibold truncate overflow-ellipsis'>
          {title}
        </div>
        <div className='text-sm text-gray-300 capitalize truncate overflow-ellipsis'>
          {readable(publisherId)}
        </div>
        <Price
          price={price}
          discount={discount}
          sections={sections}
          classes='my-2'
        />
      </Link>
    </div>
  )
}

export default GameCard01
