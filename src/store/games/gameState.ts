import { AsyncGame, AsyncGames, GameGenre, SpecialSectionKey } from 'src/types'

export type GameSliceType = {
  // games: Game[]
  homeScreenGames: AsyncGames
  highestEverDiscounts: AsyncGames
  gamePage: AsyncGame
  gamePageSimilarGames: AsyncGames
  genres: {
    [key in GameGenre]?: AsyncGames
  }
  sections: {
    [key in SpecialSectionKey]?: AsyncGames
  }
}

export const gameInitialState: GameSliceType = {
  homeScreenGames: { loading: false, error: false, items: [] },
  highestEverDiscounts: { loading: false, error: false, items: [] },
  gamePage: { loading: false, error: false, item: null },
  gamePageSimilarGames: { loading: false, error: false, items: [] },
  genres: {},
  sections: {},
}
