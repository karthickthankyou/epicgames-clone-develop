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
}

export type SortKey = 'releaseDate' | 'price' | 'title' | 'discount'

export type Wishlist = {
  gameId: string
  userId: string
}
