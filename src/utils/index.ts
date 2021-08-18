/* eslint-disable no-plusplus */
import {
  HiOutlineShoppingBag,
  HiShoppingBag,
  HiOutlineHeart,
  HiHeart,
} from 'react-icons/hi'

export const CAROUSEL_DURATION = 50
export interface ICounter {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export const discountCalc = (disc = 0, price: number) =>
  +(price - (price * disc) / 100).toFixed(2)

export const withCurrency = (price: number) => `₹${price}`

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

export const getPaginationNumbers = (current: number, total: number) => {
  if (total === 1) return []
  const items: number[] = []
  let itemsComplete: (number | '<' | '>' | '...')[] = []

  const validate = (num: number): boolean =>
    num > 0 && num <= total && !items.includes(num)

  // Always have 1
  items.push(1)

  const fillerStart =
    // eslint-disable-next-line no-nested-ternary
    current === 1 ? current + 1 : current === total ? total - 2 : current - 1
  for (let i = fillerStart; i <= fillerStart + 2; i++)
    if (validate(i)) items.push(i)

  if (validate(total)) items.push(total)

  // Insert ...
  const dotsIndex = []
  for (let i = 1; i < items.length; i++) {
    const diff: number = items[i] - items[i - 1]
    if (diff !== 1) {
      dotsIndex.push(dotsIndex.length + i)
    }
  }
  itemsComplete = items.slice()
  for (let i = 0; i < dotsIndex.length; i++) {
    itemsComplete.splice(dotsIndex[i], 0, '...')
  }

  // Insert arrows
  if (current !== 1) itemsComplete.unshift('<')
  if (current !== total) itemsComplete.push('>')

  const result: { key: number; item: typeof itemsComplete[number] }[] = []

  itemsComplete.forEach((item, index) => {
    result.push({ key: index, item })
  })

  return result
}

export const getImageUrl = (id: string) => {
  const imageUrl = `https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F${id}.jpg?alt=media`
  const subImageUrl = `https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F${id}.jpg?alt=media`
  return { imageUrl, subImageUrl }
}

export const getScoreColor = (score: number) => {
  if (score > 90) return 'border-2 border-blue-500 bg-blue-600 bg-opacity-10'
  if (score > 75) return 'border-2 border-green-600'
  if (score > 50) return 'border-2 border-red-400 '
  return 'border-2 border-red-700 '
  //   if (score > 20) return 'border-2 border-red-300'
}

export const processGameIdsForSimilarItems = (
  gameIds: { id: number; s: number }[]
): string[] =>
  gameIds.slice(0, 10).map((item) => item.id.toString().padStart(3, '0'))

export const findPercentage = (num: number) => Math.round(num * 100)

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
