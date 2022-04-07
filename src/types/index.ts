import { ReactElement } from 'react'

export type Game = {
  id: string
  title: string
  spec: string
  tags: [string]
  price: number
  discount: number
  imageUrl: string
  subImageUrl: string
  developer: string
  languages: string
  platform: [string]
  publisherId: string
  description: string
  longDesc: string[]
  releaseDate: string
  notes?: GameNotes[]
  items?: { id: number; s: number }[]

  status?: GameStatus
  similarity?: number
  wishlisted?: boolean
  inCart?: boolean
  purchased?: boolean

  // homeScreen?: string
  // unitsSold?: number
  // hoursToBeat?: number
  hoursPlayed?: string
}

export type UserGame = {
  gameId: string
  uid: string
  status: GameStatus
  updatedAt?: string
}

export type GameStatus =
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

export type GameNotes = 'HIGHEST_DISCOUNT' | 'TOP_SELLER' | 'RECENTLY_UPDATED'

export type SortKey = 'releaseDate' | 'price' | 'title' | 'discount'

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

export type LoadSuccessErrorType = 'load' | 'success' | 'failed'
export type LoadSuccessErrorDispatch = (arg0: LoadSuccessErrorType) => void

export type Children = ReactElement | ReactElement[] | string | null
