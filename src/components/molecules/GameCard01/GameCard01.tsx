import { useState } from 'react'
import { motion } from 'framer-motion'

import Price, { IPriceProps } from '../../atoms/Price'
import HoverIcon from '../../atoms/HoverIcon'
import { getInCart, getWishlisted } from '../../../utils'

export interface ICard01Props {
  gameTitle: string
  productionCompany: string
  priceInfo: IPriceProps
  displayImage: string
  inCart?: boolean
  wishlisted?: boolean
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

const GameCard01 = ({
  gameTitle,
  productionCompany,
  priceInfo: { price, discount },
  displayImage,
  inCart = false,
  wishlisted = false,
}: ICard01Props) => {
  const [hover, setHover] = useState(false)

  const { WishlistIcon, wishlistHintText } = getWishlisted(wishlisted)
  const { CartIcon, cartHintText } = getInCart(inCart)

  return (
    <div
      className='relative'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        variants={container}
        animate={hover ? 'show' : 'hidden'}
        className={`absolute right-0 z-10 opacity-0 flex m-1 ${
          hover && 'opacity-100'
        }`}
      >
        <HoverIcon
          key={wishlistHintText}
          IconComponent={WishlistIcon}
          hintText={wishlistHintText}
        />
        <HoverIcon
          key={cartHintText}
          IconComponent={CartIcon}
          hintText={cartHintText}
        />
      </motion.div>

      <a href='#0'>
        <img
          src={displayImage}
          alt=''
          className='object-cover w-full transition-all transform h-60 filter hover:brightness-120'
        />
        <div className='mt-3 font-semibold truncate overflow-ellipsis'>
          {gameTitle}
        </div>
        <div className='text-sm text-gray-300 truncate overflow-ellipsis'>
          {productionCompany}
        </div>
        <Price price={price} discount={discount} classes='mt-3' />
      </a>
    </div>
  )
}

export default GameCard01
