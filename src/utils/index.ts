import {
  HiOutlineShoppingBag,
  HiShoppingBag,
  HiOutlineHeart,
  HiHeart,
} from 'react-icons/hi'

export const CAROUSEL_DURATION = 5
export interface ICounter {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export const discountCalc = (disc = 0, price: number) =>
  +(price - (price * disc) / 100).toFixed(2)

export const withCurrency = (price: number) => `$${price}`

export const calculateTimeLeft = (date: string): ICounter => {
  const diff = new Date(date).getTime() - new Date().getTime()
  return {
    days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
    hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
    minutes: String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0'),
    seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, '0'),
  }
}

export const Timer = (callback: Function, delay: number) => {
  let timerId: number
  let start: number
  let remaining = delay

  const pause = () => {
    clearTimeout(timerId)
    remaining -= Date.now() - start
  }

  const clear = () => {
    clearTimeout(timerId)
  }

  const resume = () => {
    start = Date.now()
    clearTimeout(timerId)
    timerId = setTimeout(callback, remaining)
  }

  resume()
  return { pause, resume, clear }
}

export const getWishlisted = (wishlisted: boolean) =>
  wishlisted
    ? {
        WishlistIcon: HiHeart,
        wishlistHintText: 'Wishlisted',
      }
    : {
        WishlistIcon: HiOutlineHeart,
        wishlistHintText: 'Add to wishlist',
      }
export const getInCart = (inCart: boolean) =>
  inCart
    ? {
        CartIcon: HiShoppingBag,
        cartHintText: 'In cart',
      }
    : {
        CartIcon: HiOutlineShoppingBag,
        cartHintText: 'Add to cart',
      }
