/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

const initialState = {
  uid: null,
  displayName: null,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload?.uid
      state.displayName = action.payload?.displayName
      state.loading = false
      state.error = null
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    resetUser: (state, action) => initialState,
  },
})

export const { setUser, setLoading, setError } = userSlice.actions
export const selectUser = (state: RootState) => state.user
export default userSlice.reducer
