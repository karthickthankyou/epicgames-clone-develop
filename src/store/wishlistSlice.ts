/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { Wishlist } from '../types'
import { RootState } from './store'

const initialState: Wishlist[] = []

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlist: (state, action) => action.payload,
  },
})

export const { setWishlist } = wishlistSlice.actions
export const selectWishlist = (state: RootState) => state.wishlist
export default wishlistSlice.reducer
