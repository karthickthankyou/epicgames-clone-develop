import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useHistory } from 'react-router-dom'

import Price from '@atoms/Price'
import HoverIcon from '@atoms/HoverIcon'
import { selectUser } from '@store/userSlice'
import {
  findPercentage,
  getInCart,
  getWishlisted,
  readable,
} from '@utils/index'
import { useAppSelector } from '@store/hooks'
import { updateUserGames } from '@epicfirebase/crud'
import { Game } from '@epictypes/index'
import { ReactComponent as Briefcase } from '@assets/svgs/briefcase.svg'

export interface ICard01Props {
  game: Game
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
}

const GameCard01 = ({ game }: ICard01Props) => {
  const {
    id,
    title,
    discount,
    imageUrl,
    wishlisted = false,
    inCart = false,
    purchased,
    price,
    publisherId,
    notes,
    s,
  } = game
  const [hover, setHover] = useState(false)
  const { uid } = useAppSelector(selectUser)
  const history = useHistory()

  const { WishlistIcon, wishlistHintText } = getWishlisted(wishlisted)
  const { CartIcon, cartHintText } = getInCart(inCart)

  return (
    <div
      className='relative'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {s && (
        <div className='absolute z-10 px-1 bg-black rounded-br-md bg-opacity-70'>
          {findPercentage(s)}%
        </div>
      )}
      <motion.div
        variants={container}
        animate={hover ? 'show' : 'hidden'}
        className={`absolute right-0  z-10 opacity-0 flex m-1 ${
          hover && 'opacity-100'
        }`}
      >
        {purchased ? (
          <HoverIcon
            IconComponent={Briefcase}
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
                updateUserGames({
                  uid: uid || '',
                  gameId: id,
                  status: wishlisted ? 'REMOVED_FROM_WISHLIST' : 'WISHLISTED',
                  history,
                })
              }
            />
            <HoverIcon
              key={cartHintText}
              IconComponent={CartIcon}
              hintText={cartHintText}
              onClick={() =>
                updateUserGames({
                  uid: uid || '',
                  gameId: id,
                  status: inCart ? 'REMOVED_FROM_CART' : 'IN_CART',
                  history,
                })
              }
            />
          </>
        )}
      </motion.div>

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
        <Price price={price} discount={discount} notes={notes} classes='my-2' />
      </Link>
    </div>
  )
}

export default GameCard01
