import { RootState } from '..'

// Selectors
export const selectCartGameIds = (state: RootState) => state.userGames.IN_CART

export const selectWishlistGameIds = (state: RootState) =>
  state.userGames.WISHLISTED
export const selectRemovedFromCartGameIds = (state: RootState) =>
  state.userGames.REMOVED_FROM_CART
export const selectPurchasedGameIds = (state: RootState) =>
  state.userGames.PURCHASED
