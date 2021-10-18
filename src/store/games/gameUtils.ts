import { createSelector } from '@reduxjs/toolkit'
import { AsyncGame, AsyncGames, AsyncUserGames } from 'src/types'
import { defaultAsyncGame, defaultAsyncGames } from 'src/types/static'
import { getStatus } from 'src/utils'
import { RootState } from '..'
import {
  selectCartGameIds,
  selectPurchasedGameIds,
  selectWishlistGameIds,
} from '../userGames'

export const selectGameWithWCP = (selector: (state: RootState) => AsyncGame) =>
  createSelector(
    [
      selector,
      selectWishlistGameIds,
      selectCartGameIds,
      selectPurchasedGameIds,
    ],
    (
      input,
      wishlistIds: AsyncUserGames,
      cartIds: AsyncUserGames,
      purchasedIds: AsyncUserGames
    ): AsyncGame => {
      if (!input.data) return defaultAsyncGame

      return {
        ...input,
        data: {
          ...input.data,
          status: getStatus(input.data.id, wishlistIds, cartIds, purchasedIds),
        },
      }
    }
  )

export const selectGamesWithWCP = (
  selector: (state: RootState) => AsyncGames | undefined
) =>
  createSelector(
    [
      selector,
      selectWishlistGameIds,
      selectCartGameIds,
      selectPurchasedGameIds,
    ],
    (
      input: AsyncGames | undefined,
      wishlistIds: AsyncUserGames,
      cartIds: AsyncUserGames,
      purchasedIds: AsyncUserGames
    ): AsyncGames => {
      if (!input) return defaultAsyncGames
      const data = input.data.map((game) => ({
        ...game,
        status: getStatus(game.id, wishlistIds, cartIds, purchasedIds),
      }))
      return { ...input, data }
    }
  )
