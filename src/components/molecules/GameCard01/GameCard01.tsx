import React, { useState, memo } from 'react'
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
  className?: string
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

const GameCard01 = memo(({ game, className }: ICard01Props) => {
  const {
    id,
    title,
    discount,
    imageUrl,
    price,
    publisherId,
    notes,
    similarity,
    wishlisted,
    inCart,
    purchased,
  } = game

  const [hover, setHover] = useState(false)
  const { uid } = useAppSelector(selectUser)
  const history = useHistory()

  const { WishlistIcon, wishlistHintText } = getWishlisted(wishlisted || false)
  const { CartIcon, cartHintText } = getInCart(inCart || false)

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {similarity && (
        <div className='absolute text-sm z-10 px-1 py-0.5 bg-primary rounded-tl-md bg-opacity-90'>
          Similarity{' '}
          <span className='font-bold'>{findPercentage(similarity)}%</span>
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
})

export default GameCard01

export const SkeletonCard01 = () => {
  const widths = ['w-4/5', 'w-4/6', 'w-5/6', 'w-1/2', 'w-2/3', 'w-3/4']
  const ran = () => Math.round(Math.random() * widths.length)

  return (
    <div className='w-full'>
      {/* <div className='h-32 rounded-tl rounded-tr animate-pulse' /> */}

      <div className='relative aspect-w-3 aspect-h-4'>
        <div className='object-cover object-center bg-gray-800 rounded-lg animate-pulse' />
        <div className='absolute flex items-start justify-end w-full p-3'>
          <div className='w-5 h-5 bg-gray-800 rounded-full ' />
          <div className='w-5 h-5 ml-2 bg-gray-800 rounded-full ' />
        </div>
      </div>

      <div
        className={`h-4 mt-4 bg-gray-800 rounded-sm animate-pulse ${
          widths[ran()]
        }`}
      />
      <div
        className={`h-4 mt-2 bg-gray-800 rounded-sm animate-pulse ${
          widths[ran()]
        }`}
      />
      <div
        className={`h-4 mt-2 mb-2 bg-gray-800 rounded-sm animate-pulse ${
          widths[ran()]
        }`}
      />
    </div>
  )
}
