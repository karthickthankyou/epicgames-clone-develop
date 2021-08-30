// For the search only version
import algoliasearch from 'algoliasearch/lite'

const client = algoliasearch('3SDJELGA71', 'de6787a28650ff159c16770b437da7da')
export const index = client.initIndex('games')
