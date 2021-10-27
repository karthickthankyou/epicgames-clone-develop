/* eslint-disable no-redeclare */
import { createSelector } from '@reduxjs/toolkit'
import { defaultAsyncGame, defaultAsyncGames } from '../../types/static'
import { getStatus } from '../../utils'
import { AsyncGame, AsyncGames, AsyncUserGames } from '../../types'
import { RootState } from '..'

// Selectors
export const selectCartGameIds = (state: RootState) => state.userGames.IN_CART

export const selectWishlistGameIds = (state: RootState) =>
  state.userGames.WISHLISTED
export const selectRemovedFromCartGameIds = (state: RootState) =>
  state.userGames.REMOVED_FROM_CART
export const selectPurchasedGameIds = (state: RootState) =>
  state.userGames.PURCHASED

// Custom create selectors

export const createSelectorWCPGame = (
  selector: (state: RootState) => AsyncGame
) =>
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

export const createSelectorWCPGames = (
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
