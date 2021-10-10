/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Extends, Game, GameGenre, SpecialGames, UserGame } from '../types'
import { getStatus } from '../utils/index'
import { RootState } from './store'
import {
  selectCartGameIds,
  selectPurchasedGameIds,
  selectWishlistGameIds,
} from './userGameSlice'

type stateType = {
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
}

const initialState: stateType = {
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
    setGames: (state, action: PayloadAction<stateType['games']>) => {
      state.games = action.payload
    },
    setHomeScreenGames: (
      state,
      action: PayloadAction<stateType['homeScreenGames']>
    ) => {
      state.homeScreenGames = action.payload
    },
    setGamePage: (state, action: PayloadAction<stateType['gamePage']>) => {
      state.gamePage = action.payload
    },
    setGamePageSimilarGames: (
      state,
      action: PayloadAction<stateType['gamePageSimilarGames']>
    ) => {
      state.gamePageSimilarGames = action.payload
    },
    setHighestEverDiscounts: (
      state,
      action: PayloadAction<stateType['highestEverDiscounts']>
    ) => {
      state.highestEverDiscounts = action.payload
    },
    setActionGames: (
      state,
      action: PayloadAction<stateType['genres']['action']>
    ) => {
      state.genres.action = action.payload
    },
    setAdventureGames: (
      state,
      action: PayloadAction<stateType['genres']['adventure']>
    ) => {
      state.genres.adventure = action.payload
    },
    setPuzzleGames: (
      state,
      action: PayloadAction<stateType['genres']['puzzle']>
    ) => {
      state.genres.puzzle = action.payload
    },
    setNarrationGames: (
      state,
      action: PayloadAction<stateType['genres']['narration']>
    ) => {
      state.genres.narration = action.payload
    },
    setUnitsSold: (
      state,
      action: PayloadAction<stateType['special']['unitsSold']>
    ) => {
      state.special.unitsSold = action.payload
    },
    setHoursPlayed: (
      state,
      action: PayloadAction<stateType['special']['hoursPlayed']>
    ) => {
      state.special.hoursPlayed = action.payload
    },
    setHoursToBeat: (
      state,
      action: PayloadAction<stateType['special']['hoursToBeat']>
    ) => {
      state.special.hoursToBeat = action.payload
    },
    setAnticipatedBy: (
      state,
      action: PayloadAction<stateType['special']['anticipatedBy']>
    ) => {
      state.special.anticipatedBy = action.payload
    },
    resetGames: (state, action) => initialState,
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
