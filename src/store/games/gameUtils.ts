import { createSelector } from '@reduxjs/toolkit'
import { Game, UserGame } from 'src/types'
import { getStatus } from 'src/utils'
import { RootState } from '..'
import {
  selectCartGameIds,
  selectPurchasedGameIds,
  selectWishlistGameIds,
} from '../userGames/userGameSlice'

export const selectGameWithWCP = (
  selector: (state: RootState) => Game | null
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
  )

export const selectGamesWithWCP = (selector: (state: RootState) => Game[]) =>
  createSelector(
    [
      selector,
      selectWishlistGameIds,
      selectCartGameIds,
      selectPurchasedGameIds,
    ],
    (
      input: Game[],
      wishlistIds: UserGame[],
      cartIds: UserGame[],
      purchasedIds: UserGame[]
    ): Game[] =>
      input.map((game) => ({
        ...game,
        status: getStatus(game.id, wishlistIds, cartIds, purchasedIds),
      }))
  )
