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
  longDesc: string
  releaseDate: string
  imageUrl: string
  subImageUrl: string
  wishlisted?: boolean
  inCart?: boolean
  notes?: GameNotes[]
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

export type GameNotes = 'HIGHEST_DISCOUNT'
