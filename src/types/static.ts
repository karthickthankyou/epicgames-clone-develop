import { OrderByDirection } from 'firebase/firestore'
import { SortKey } from '.'

export const sortByOptions: {
  displayText: string
  sortKey: SortKey
  sortOrder: OrderByDirection
}[] = [
  { displayText: 'On Sale', sortKey: 'discount', sortOrder: 'desc' },
  { displayText: 'Recently Added', sortKey: 'releaseDate', sortOrder: 'desc' },
  { displayText: 'Alphabetical', sortKey: 'title', sortOrder: 'asc' },
  { displayText: 'Price: Low to High', sortKey: 'price', sortOrder: 'asc' },
  { displayText: 'Price: High to Low', sortKey: 'price', sortOrder: 'desc' },
]
