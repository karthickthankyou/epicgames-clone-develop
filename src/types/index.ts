export type Game = {
  id: string
  title: string
  tags: GameGenre[]
  price: number
  discount: number
  publisherId: Publisher['id']
  imageUrl: string
  subImageUrl: string
  rating?: number
  sections?: GameSection[]
  specialSections?: SpecialSection
  features?: Feature[]
  description?: string
  developer?: string
  languages?: string
  platform?: Platform[]
  longDesc?: string[]
  releaseDate?: string
  spec?: {}

  similar?: SimilarGame[]

  status?: GameStatus
  similarity?: string
}

export type User = {
  uid: string | null
  displayName: string | null
}

export type AsyncData<T> = {
  data: T
  fulfilled?: boolean
  loading?: boolean
  error?: boolean
}
export type AsyncGames = AsyncData<Game[]>
export type AsyncGame = AsyncData<Game | null>
export type AsyncUserGames = AsyncData<UserGame[]>
export type AsyncUser = AsyncData<User>

export type SigninInfo = {
  email: string
  password: string
}
export type SignupInfo = SigninInfo & {
  displayName?: string
}

// const game: Game = {
//   platform: ["Mac OS","Windows"]
// }

export type Publisher = {
  id: string
  name: string
  games: Game['id'][]
}

export type UserGame = {
  gameId: Game['id']
  uid: string
  status: GameStatus
  updatedAt?: string
}

export type SimilarGame = { id: string; s: string }

type Feature =
  | 'Single Player'
  | 'Co-op'
  | 'Multiplayer'
  | 'Controller Support'
  | 'Competitve'
  | 'VR'
  | 'Competitive'

type GameStatus =
  | 'WISHLISTED'
  | 'IN_CART'
  | 'PURCHASED'
  | 'REMOVED_FROM_CART'
  | 'REMOVED_FROM_WISHLIST'

export type GameLight = Pick<
  Game,
  | 'title'
  | 'price'
  | 'discount'
  | 'id'
  | 'publisherId'
  | 'imageUrl'
  | 'subImageUrl'
>

export type GameSection =
  | 'HIGHEST_DISCOUNT'
  | 'TOP_SELLER'
  | 'RECENTLY_UPDATED'
  | 'HOMESCREEN_CAROUSEL'
  | 'STORY_RICH'
  | 'VISUAL_MARVEL'

export type SortKey = 'releaseDate' | 'price' | 'title' | 'discount'

export type UserGameStatus =
  | 'IN_CART'
  | 'WISHLISTED'
  | 'PURCHASED'
  | 'REMOVED_FROM_CART'
  | 'REMOVED_FROM_WISHLIST'

export type SpecialSectionKey =
  | 'unitsSold'
  | 'hoursToBeat'
  | 'anticipatedBy'
  | 'quickBites'

export type SpecialSection = {
  [key in SpecialSectionKey]?: number
}

// To create a subset of union types
export type Extends<T, U extends T> = U

export type GameGenre =
  | 'Action'
  | 'Adventure'
  | 'Indie'
  | 'RPG'
  | 'Strategy'
  | 'OpenWorld'
  | 'Shooter'
  | 'Puzzle'
  | 'FirstPerson'
  | 'Narration'
  | 'Simulation'
  | 'Casual'
  | 'TurnBased'
  | 'Exploration'
  | 'Horror'
  | 'Platformer'
  | 'Party'
  | 'Survival'
  | 'Trivia'
  | 'CityBuilder'
  | 'Stealth'
  | 'Fighting'
  | 'Comedy'
  | 'ActionAdventure'
  | 'Racing'
  | 'RogueLite'
  | 'CardGame'
  | 'Sports'
  | 'Application'

export type Platform = 'Windows' | 'Mac OS'

export type StripeItem = {
  name: string
  amount: number
  currency: string
  quantity: number
  images: string[]
}

export type LoadSuccessErrorType = 'load' | 'success' | 'failed'
export type LoadSuccessErrorDispatch = (arg0: LoadSuccessErrorType) => void

// homeScreen?: string
// unitsSold?: number
// hoursToBeat?: number
// hoursPlayed?: string
