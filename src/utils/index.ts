/* eslint-disable no-plusplus */
import slugify from 'slugify'

import HeartOutlineIcon from '@heroicons/react/outline/HeartIcon'
import HeartSolidIcon from '@heroicons/react/solid/HeartIcon'

import CartSolidIcon from '@heroicons/react/solid/ShoppingCartIcon'
import CartOutlineIcon from '@heroicons/react/outline/ShoppingCartIcon'
import dateFormat from 'dateformat'

export const CAROUSEL_DURATION = 30
export interface ICounter {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export const fixedTwoDec = (num: number) => num.toFixed(2)

export const discountCalc = (disc = 0, price: number) =>
  +(price - (price * disc) / 100).toFixed(2)

export const withCurrency = (price: number) => `₹${price.toFixed(2)}`

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
        WishlistIcon: HeartSolidIcon,
        wishlistHintText: 'Wishlisted',
      }
    : {
        WishlistIcon: HeartOutlineIcon,
        wishlistHintText: 'Add to wishlist',
      }
export const getInCart = (inCart: boolean) =>
  inCart
    ? {
        CartIcon: CartSolidIcon,
        cartHintText: 'In cart',
      }
    : {
        CartIcon: CartOutlineIcon,
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
    const diff: number = items[+i] - items[i - 1]
    if (diff !== 1) {
      dotsIndex.push(dotsIndex.length + i)
    }
  }
  itemsComplete = items.slice()
  for (let i = 0; i < dotsIndex.length; i++) {
    itemsComplete.splice(dotsIndex[+i], 0, '...')
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
  if (score > 90) return 'border-2 border-white'
  if (score > 80) return 'border-2 border-gray-200'
  if (score > 70) return 'border-2 border-gray-300 '
  if (score > 60) return 'border-2 border-gray-500 '
  if (score > 50) return 'border-2 border-gray-600 '
  return 'border-2 border-gray-700 '
  //   if (score > 20) return 'border-2 border-red-300'
}

export const processGameIdsForSimilarItems = (
  gameIds: { id: number; s: number }[]
): string[] =>
  gameIds.slice(0, 10).map((item) => item.id.toString().padStart(3, '0'))

export const findPercentage = (num: number) => Math.round(num * 100)

export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({ top: 0, behavior })
}

export const soloPaths = ['/signin', '/signup', '/forgotpassword']

export const slug = (text: string) => slugify(text, { lower: true })

export const addOrRemoveItem = (arr: string[], item: string) =>
  arr.includes(item)
    ? arr.filter((eventItem) => eventItem !== item)
    : [...arr, item]

export const readable = (str: string) => str.split('-').join(' ')

export const getInitials = (text: string) =>
  text
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

export const formatDate = (date: string) => dateFormat(date, 'mmm d yyyy')

export const getDates = () => {
  const today = new Date()
  const twoDaysBack = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 2
  ).toISOString()

  const randomDaysBack = Math.floor(Math.random() * 24) + 1

  const randomDate = new Date(
    today.getFullYear(),
    today.getMonth() - randomDaysBack
  ).toISOString()

  const nextWeekLocal = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 5
  ).toISOString()
  return {
    randomDate: formatDate(randomDate),
    date: twoDaysBack,
    nextWeek: nextWeekLocal,
  }
}

export const getRandomDate = () => formatDate(getDates().randomDate)

export const shuffle = (array: any[]) => {
  array.sort(() => Math.random() - 0.5)
}

export const getRandomNumber = (min = 0, max = 100) => {
  const difference = max - min
  let rand = Math.random()
  rand = Math.floor(rand * difference)
  rand += min
  return rand
}
