import { OrderByDirection } from 'firebase/firestore'
import {
  AsyncData,
  AsyncGame,
  AsyncGames,
  AsyncUserGames,
  Game,
  SortKey,
  UserGame,
} from '.'

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

export const sampleGame: Game = {
  id: '92',
  title: 'Cyber Punk',
  tags: ['Action'],
  imageUrl: '',
  subImageUrl: '',
  publisherId: 'Some production company',
  price: 10,
  discount: 10,
}

export const ROUTES = {
  SIGNIN: '/signin',
  LIBRARY: '/library',
  SIGNUP: '/signup',
  GAME: '/game/:id',
  BROWSE: '/browse',
}

export const genres: Game['tags'] = [
  'Action',
  'Adventure',
  'Indie',
  'RPG',
  'Strategy',
  'OpenWorld',
  'Shooter',
  'Puzzle',
  'FirstPerson',
  'Narration',
  'Simulation',
  'Casual',
  'TurnBased',
  'Exploration',
  'Horror',
  'Platformer',
  'Party',
  'Survival',
  'Trivia',
  'CityBuilder',
  'Stealth',
  'Fighting',
  'Comedy',
  'ActionAdventure',
  'Racing',
  'RogueLite',
  'CardGame',
  'Sports',
]
export const platforms: Required<Game>['platform'] = ['Windows', 'Mac OS']

export const events: Required<Game>['sections'] = [
  'RECENTLY_UPDATED',
  'HIGHEST_DISCOUNT',
  'TOP_SELLER',
]

// const defaultItemCreator = <AsyncData<T>>({data: T}) => ({
//   data: T,
//   fulfilled: false,
//   loading: false,
//   error: false,
// })

function defaultValueCreator<T>(arg: T): AsyncData<T> {
  return {
    data: arg,
    fulfilled: false,
    loading: false,
    error: false,
  }
}

export const defaultAsyncGame: AsyncGame = defaultValueCreator<Game | null>(
  null
)
export const defaultAsyncGames: AsyncGames = defaultValueCreator<Game[]>([])
export const defaultAsyncUserGames: AsyncUserGames = defaultValueCreator<
  UserGame[]
>([])

// console.log(defaultAsyncGame, defaultAsyncGames, defaultAsyncUserGames)
// export const defaultAsyncGame: AsyncGame = {
//   data: null,
//   fulfilled: false,
//   loading: false,
//   error: false,
// }

// export const defaultAsyncGames: AsyncGames = {
//   data: [],
//   fulfilled: false,
//   loading: false,
//   error: false,
// }
