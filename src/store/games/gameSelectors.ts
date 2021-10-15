import { selectGamesWithWCP, selectGameWithWCP } from './gameUtils'

export const selectActionGames = selectGamesWithWCP(
  (state) => state.games.genres.Action?.items || []
)

export const selectAdventureGames = selectGamesWithWCP(
  (state) => state.games.genres.Adventure?.items || []
)

export const selectPuzzleGames = selectGamesWithWCP(
  (state) => state.games.genres.Puzzle?.items || []
)

export const selectNarrationGames = selectGamesWithWCP(
  (state) => state.games.genres.Narration?.items || []
)

export const selectUnitsSold = selectGamesWithWCP(
  (state) => state.games.sections.unitsSold?.items || []
)

export const selectHoursToBeat = selectGamesWithWCP(
  (state) => state.games.sections.hoursToBeat?.items || []
)

export const selectAnticipatedBy = selectGamesWithWCP(
  (state) => state.games.sections.anticipatedBy?.items || []
)

export const selectGamePageSimilarGames = selectGamesWithWCP(
  (state) => state.games.gamePageSimilarGames?.items || []
)

export const selectHomeScreenGames = selectGamesWithWCP(
  (state) => state.games.homeScreenGames.items
)

export const selectHighestDiscounts = selectGamesWithWCP(
  (state) => state.games.highestEverDiscounts.items
)

export const selectGamePage = selectGameWithWCP(
  (state) => state.games.gamePage.item || null
)
