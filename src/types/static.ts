import { OrderByDirection } from 'firebase/firestore'
import { SortKey } from '.'

export const sortByOptions: {
  displayText: string
  sortKey: SortKey
  sortOrder: OrderByDirection
}[] = [
  { displayText: 'Recently Added', sortKey: 'releaseDate', sortOrder: 'desc' },
  { displayText: 'On Sale', sortKey: 'discount', sortOrder: 'desc' },
  //   { displayText: 'Alphabetical', sortKey: 'title', sortOrder: 'asc' },
  { displayText: 'Price: Low to High', sortKey: 'price', sortOrder: 'asc' },
  { displayText: 'Price: High to Low', sortKey: 'price', sortOrder: 'desc' },
  { displayText: 'Highest Rated', sortKey: 'price', sortOrder: 'desc' },
]

export const sampleGame = {
  id: '92',
  gameTitle: 'Cyber Punk',
  productionCompany: 'Some production company',
  priceInfo: {},
  price: 10,
  discount: 10,
  displayImage: '',
  inCart: true,
  wishlisted: true,
}

export const ROUTES = {
  SIGNIN: '/signin',
  LIBRARY: '/library',
  SIGNUP: '/signup',
  GAME: '/game/:id',
  BROWSE: '/browse',
}
