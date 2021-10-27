// For the search only version
import algoliasearch from 'algoliasearch/lite'

const client = algoliasearch('234kj234lkj', 'slsdfkljsldkfjj')
export const sortByReleaseDateIndex = client.initIndex('games')
export const sortByDiscountIndex = client.initIndex('sortByDiscount')
export const sortByRatingsIndex = client.initIndex('sortByRatings')
export const sortByPriceAscIndex = client.initIndex('sortByPriceAsc')
export const sortByPriceDescIndex = client.initIndex('sortByPriceDesc')
