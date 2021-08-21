export type Game = {
  spec: string
  tags: [string]
  price: number
  discount: number
  developer: string
  languages: string
  platform: [string]
  publisherId: string
  description: string
  title: string
  id: string
  longDesc: string[]
  releaseDate: string
  imageUrl: string
  subImageUrl: string
  wishlisted?: boolean
  purchased?: boolean
  inCart?: boolean
  homeScreen?: string
  notes?: GameNotes[]
  items?: { id: number; s: number }[]
  s?: any
  unitsSold?: number
  hoursToBeat?: number
  hoursPlayed?: string
  anticipatedBy?: number
}

export type SortKey = 'releaseDate' | 'price' | 'title' | 'discount'

export type UserGame = {
  gameId: string
  userId: string
  status?: string
  updatedAt?: string
}

export type UserGameStatus =
  | 'IN_CART'
  | 'WISHLISTED'
  | 'PURCHASED'
  | 'REMOVED_FROM_CART'
  | 'REMOVED_FROM_WISHLIST'

export type GameGenre = 'Action' | 'Puzzle' | 'Narration' | 'Adventure'
export type SpecialGames =
  | 'unitsSold'
  | 'hoursToBeat'
  | 'anticipatedBy'
  | 'hoursPlayed'

export type GameNotes = 'HIGHEST_DISCOUNT'

export type LoadSuccessErrorType = 'load' | 'success' | 'failed'
export type LoadSuccessErrorDispatch = (arg0: LoadSuccessErrorType) => void
