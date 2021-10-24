// For the search only version
import algoliasearch from 'algoliasearch/lite'

const client = algoliasearch('3SDJELGA71', 'de6787a28650ff159c16770b437da7da')
export const sortByReleaseDateIndex = client.initIndex('games')
export const sortByDiscountIndex = client.initIndex('sortByDiscount')
export const sortByRatingsIndex = client.initIndex('sortByRatings')
export const sortByPriceAscIndex = client.initIndex('sortByPriceAsc')
export const sortByPriceDescIndex = client.initIndex('sortByPriceDesc')
