/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from '@reduxjs/toolkit/node_modules/immer/dist/types/types-external'
import { captureException } from '@sentry/react'
import { defaultAsyncGame, defaultAsyncGames } from 'src/types/static'
import {
  AsyncGame,
  AsyncGames,
  GameGenre,
  GameSection,
  SpecialSectionKey,
  UserGameStatus,
} from '../../types'
import {
  getGamePage,
  getGameSections,
  getGamesGenre,
  getSpecialGames,
} from './gameActions'

// Hey we need to look into the Record! to compose an object.

type GameSliceType = {
  gamePage: AsyncGame
  similarGames: AsyncGames
  genres: {
    [key in GameGenre]?: AsyncGames
  }
  sections: {
    [key in GameSection]?: AsyncGames
  }
  specialSections: {
    [key in SpecialSectionKey]?: AsyncGames
  }
  userGames: {
    [key in UserGameStatus]: AsyncGames
  }
}

const initialState: GameSliceType = {
  gamePage: defaultAsyncGame,
  similarGames: defaultAsyncGames,
  genres: {},
  sections: {},
  specialSections: {},
  userGames: {
    WISHLISTED: defaultAsyncGames,
    IN_CART: defaultAsyncGames,
    PURCHASED: defaultAsyncGames,
    REMOVED_FROM_CART: defaultAsyncGames,
    REMOVED_FROM_WISHLIST: defaultAsyncGames,
  },
}

const setAsyncGames = (
  asyncGames: WritableDraft<AsyncGames> | undefined,
  {
    fulfilled = false,
    loading = false,
    error = false,
    data = [],
  }: Partial<AsyncGames>
) => {
  asyncGames = {
    data,
    fulfilled,
    loading,
    error,
  }
}
const setAsyncGame = (
  asyncGame: WritableDraft<AsyncGame> | undefined,
  {
    fulfilled = false,
    loading = false,
    error = false,
    data = null,
  }: Partial<AsyncGame>
) => {
  asyncGame = {
    data,
    fulfilled,
    loading,
    error,
  }
}

const setGames =
  (status: UserGameStatus) =>
  (state: WritableDraft<GameSliceType>, action: PayloadAction<AsyncGames>) => {
    state.userGames[status as UserGameStatus] = action.payload
  }

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setWishlistedGames: setGames('WISHLISTED'),
    setCartGames: setGames('IN_CART'),
    setPurchasedGames: setGames('PURCHASED'),
    setRemovedFromCartGames: setGames('REMOVED_FROM_CART'),
    setRemovedFromWishlistGames: setGames('REMOVED_FROM_WISHLIST'),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGamePage.pending, (state) => {
        setAsyncGame(state.gamePage, { loading: true })
      })
      .addCase(getGamePage.fulfilled, (state, action) => {
        setAsyncGame(state.gamePage, { data: action.payload })
      })
      .addCase(getGamePage.rejected, (state) => {
        setAsyncGame(state.gamePage, { error: true })
      })
    builder
      .addCase(getSpecialGames.pending, (state, action) => {
        const { property } = action.meta.arg
        setAsyncGames(state.specialSections[property as SpecialSectionKey], {
          loading: true,
        })
      })
      .addCase(getSpecialGames.fulfilled, (state, action) => {
        const { property } = action.meta.arg
        const { games } = action.payload
        setAsyncGames(state.specialSections[property as SpecialSectionKey], {
          data: games,
        })
      })
      .addCase(getSpecialGames.rejected, (state, action) => {
        const { property } = action.meta.arg
        setAsyncGames(state.specialSections[property as SpecialSectionKey], {
          error: true,
        })
      })
    builder
      .addCase(getGamesGenre.pending, (state, action) => {
        const { property } = action.meta.arg
        setAsyncGames(state.genres[property as GameGenre], {
          loading: true,
        })
      })
      .addCase(getGamesGenre.fulfilled, (state, action) => {
        const { property } = action.meta.arg
        const { games } = action.payload
        setAsyncGames(state.genres[property as GameGenre], {
          data: games,
        })
      })
      .addCase(getGamesGenre.rejected, (state, action) => {
        const { property } = action.meta.arg
        setAsyncGames(state.genres[property as GameGenre], {
          error: true,
        })
      })
    builder
      .addCase(getGameSections.pending, (state, action) => {
        const { property } = action.meta.arg
        setAsyncGames(state.sections[property as GameSection], {
          loading: true,
        })
      })
      .addCase(getGameSections.fulfilled, (state, action) => {
        const { property } = action.meta.arg
        const { games } = action.payload
        setAsyncGames(state.sections[property as GameSection], {
          data: games,
        })
      })
      .addCase(getGameSections.rejected, (state, action) => {
        const { property } = action.meta.arg
        setAsyncGames(state.sections[property as GameSection], {
          error: true,
        })
      })
  },
})

export const {
  setWishlistedGames,
  setCartGames,
  setPurchasedGames,
  setRemovedFromCartGames,
} = gamesSlice.actions

export default gamesSlice.reducer
