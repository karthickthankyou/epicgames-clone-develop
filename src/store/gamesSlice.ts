/* eslint-disable no-param-reassign */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  Extends,
  Game,
  GameGenre,
  SpecialGames,
  UserGame,
} from '../types/index'
import { getStatus } from '../utils/index'
import { RootState } from './store'
import {
  selectCartGameIds,
  selectPurchasedGameIds,
  selectWishlistGameIds,
} from './userGameSlice'

const initialState: {
  games: Game[]
  homeScreenGames: Game[]
  highestEverDiscounts: Game[]
  gamePage: Game | null
  gamePageSimilarGames: Game[]
  genres: {
    [key in Lowercase<
      Extends<GameGenre, 'Action' | 'Adventure' | 'Puzzle' | 'Narration'>
    >]: Game[]
  }
  special: { [key in SpecialGames]: Game[] }
} = {
  games: [],
  homeScreenGames: [],
  highestEverDiscounts: [],
  gamePage: null,
  gamePageSimilarGames: [],
  genres: {
    action: [],
    adventure: [],
    puzzle: [],
    narration: [],
  },
  special: {
    unitsSold: [],
    hoursToBeat: [],
    hoursPlayed: [],
    anticipatedBy: [],
  },
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload
    },
    setHomeScreenGames: (state, action) => {
      state.homeScreenGames = action.payload
    },
    setGamePage: (state, action) => {
      state.gamePage = action.payload
    },
    setGamePageSimilarGames: (state, action) => {
      state.gamePageSimilarGames = action.payload
    },
    setHighestEverDiscounts: (state, action) => {
      state.highestEverDiscounts = action.payload
    },
    setActionGames: (state, action: PayloadAction<Game[]>) => {
      state.genres.action = action.payload
    },
    setAdventureGames: (state, action: PayloadAction<Game[]>) => {
      state.genres.adventure = action.payload
    },
    setPuzzleGames: (state, action: PayloadAction<Game[]>) => {
      state.genres.puzzle = action.payload
    },
    setNarrationGames: (state, action: PayloadAction<Game[]>) => {
      state.genres.narration = action.payload
    },
    setUnitsSold: (state, action: PayloadAction<Game[]>) => {
      state.special.unitsSold = action.payload
    },
    setHoursPlayed: (state, action: PayloadAction<Game[]>) => {
      state.special.hoursPlayed = action.payload
    },
    setHoursToBeat: (state, action: PayloadAction<Game[]>) => {
      state.special.hoursToBeat = action.payload
    },
    setAnticipatedBy: (state, action: PayloadAction<Game[]>) => {
      state.special.anticipatedBy = action.payload
    },
  },
})

export const {
  //   setGames,
  setHomeScreenGames,
  setHighestEverDiscounts,
  setActionGames,
  setAdventureGames,
  setPuzzleGames,
  setNarrationGames,
  setGamePage,
  setGamePageSimilarGames,
  setUnitsSold,
  setHoursPlayed,
  setAnticipatedBy,
  setHoursToBeat,
} = gamesSlice.actions

export const selectGames = (state: RootState) => state.games.games

export const selectHomeScreenGames = (state: RootState) =>
  state.games.homeScreenGames

export const combineWCPData = (
  input: Game[],
  wishlistIds: UserGame[],
  cartIds: UserGame[],
  purchasedIds: UserGame[]
): Game[] =>
  input.map((game) => ({
    ...game,
    status: getStatus(game.id, wishlistIds, cartIds, purchasedIds),
  }))

export const combineWCPDataForObject = (
  input: Game | null,
  wishlistIds: UserGame[],
  cartIds: UserGame[],
  purchasedIds: UserGame[]
): Game | null => {
  if (!input) return null

  return {
    ...input,
    status: getStatus(input.id, wishlistIds, cartIds, purchasedIds),
  }
}

export const selectHighestDiscounts = createSelector(
  [
    (state: RootState) => state.games.highestEverDiscounts,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export const selectGames2 = createSelector(
  [
    selectGames,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export const selectGamePageSimilarGames = createSelector(
  [
    (state: RootState) => state.games.gamePageSimilarGames,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export const selectGamePage = createSelector(
  [
    (state: RootState) => state.games.gamePage,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPDataForObject
)

export const selectActionGames = createSelector(
  [
    (state: RootState) => state.games.genres.action,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export const selectUnitsSold = createSelector(
  [
    (state: RootState) => state.games.special.unitsSold,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export const selectHoursPlayed = createSelector(
  [
    (state: RootState) => state.games.special.hoursPlayed,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export const selectHoursToBeat = createSelector(
  [
    (state: RootState) => state.games.special.hoursToBeat,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export const selectAnticipatedBy = createSelector(
  [
    (state: RootState) => state.games.special.anticipatedBy,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export const selectAdventureGames = createSelector(
  [
    (state: RootState) => state.games.genres.adventure,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)
export const selectPuzzleGames = createSelector(
  [
    (state: RootState) => state.games.genres.puzzle,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)
export const selectNarrationGames = createSelector(
  [
    (state: RootState) => state.games.genres.narration,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export default gamesSlice.reducer
