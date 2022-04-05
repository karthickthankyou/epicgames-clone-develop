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

export const sampleGames = [
  {
    title: 'Back 4 Blood',
    id: '183',
    price: 2999,
  },
  {
    title: 'The Architect: Paris',
    id: '043',
    price: 429,
  },

  {
    title: 'Riders Republic',
    id: '135',
    price: 2999,
  },
  {
    title: "Luna's Fishing Garden",
    id: '002',
    price: 279,
  },

  {
    title: 'Beasts of Maravilla Island',
    id: '003',
    price: 239,
  },
  {
    title: 'Open Country',
    id: '007',
    price: 829,
  },
  {
    title: 'WE ARE FOOTBALL',
    id: '005',
    price: 1580,
  },
  {
    title: 'Chicory: A Colorful Tale',
    id: '004',
    price: 469,
  },
  {
    title: 'Genshin Impact',
    id: '010',
    price: 0,
  },
  {
    title: 'Backbone',
    id: '012',
    price: 589,
  },
  {
    title: 'Chivalry 2',
    id: '013',
    price: 939,
  },
  {
    title: 'Edge Of Eternity',
    id: '011',
    price: 0,
  },
  {
    title: 'Slipways',
    id: '015',
    price: 399,
  },
  {
    title: 'Necromunda: Hired Gun',
    id: '018',
    price: 1599,
  },
  {
    title: 'Going Medieval',
    id: '016',
    price: 589,
  },
  {
    title: 'Stonefly',
    id: '017',
    price: 529,
  },
  {
    title: 'Timelie - Game of the Year Edition',
    id: '020',
    price: 429,
  },
  {
    title: 'The Longest Road on Earth',
    id: '021',
    price: 239,
  },
  {
    title: 'GRAVEN',
    id: '023',
    price: 699,
  },
  {
    title: 'Truck Driver',
    id: '022',
    price: 709,
  },
  {
    title: 'Tennis Manager 2021',
    id: '025',
    price: 1059,
  },
  {
    title: 'BIOMUTANT',
    id: '024',
    price: 1889,
  },
  {
    title: 'Knockout City™',
    id: '019',
    price: 1499,
  },
  {
    title: 'Wanna Survive',
    id: '027',
    price: 349,
  },
]
