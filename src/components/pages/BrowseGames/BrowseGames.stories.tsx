import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import browseGamesReducer, { initialState } from '@store/browseGamesSlice'
import userReducer, { initialState as userInitialState } from '@store/userSlice'
import userGamesReducer, {
  initialState as userGamesinitialState,
} from '@store/userGameSlice'
import { getUserGameIdList, sampleGames, sampleUserGameIds } from '@utils/data'
import { Provider } from 'react-redux'
import { GameStatus } from '@epictypes/index'
import BrowseGames from './BrowseGames'

export default {
  title: 'pages/BrowseGames',
  component: BrowseGames,
} as ComponentMeta<typeof BrowseGames>

const Template: ComponentStory<typeof BrowseGames> = () => <BrowseGames />

const reducers = {
  browseGames: browseGamesReducer,
  userGames: userGamesReducer,
  user: userReducer,
}

const state = {
  browseGames: { ...initialState, games: sampleGames.slice(0, 8) },
  userGames: userGamesinitialState,
  user: userInitialState,
}
const stateWithLoading = {
  browseGames: { ...initialState, loading: true },
  userGames: userGamesinitialState,
  user: userInitialState,
}
const stateWithError = {
  browseGames: { ...initialState, error: true },
  userGames: userGamesinitialState,
  user: userInitialState,
}

const stateWithWishlisted = {
  ...state,
  userGames: {
    ...userGamesinitialState,
    wishlistGameIds: getUserGameIdList({
      ids: ['030', '031', '028', '036', '029', '034', '035', '037'],
      status: 'WISHLISTED',
    }),
  },
}
const stateWithInCartItems = {
  ...state,
  userGames: {
    ...userGamesinitialState,
    cartGameIds: getUserGameIdList({
      ids: ['030', '031', '028', '036', '029', '034', '035', '037'],
      status: 'IN_CART',
    }),
  },
}
const stateWithInPurchasedItems = {
  ...state,
  userGames: {
    ...userGamesinitialState,
    purchasedGameIds: getUserGameIdList({
      ids: ['030', '031', '028', '036', '029', '034', '035', '037'],
      status: 'PURCHASED',
    }),
  },
}

const storeWithBrowseData = createStore(combineReducers(reducers), state)
const storeWithLoading = createStore(
  combineReducers(reducers),
  stateWithLoading
)
const storeWithError = createStore(combineReducers(reducers), stateWithError)
const storeWithBrowseDataWithWishlisted = createStore(
  combineReducers(reducers),
  stateWithWishlisted
)
const storeWithBrowseDataWithInCartItems = createStore(
  combineReducers(reducers),
  stateWithInCartItems
)
const storeWithBrowseDataWithInPurchasedItems = createStore(
  combineReducers(reducers),
  stateWithInPurchasedItems
)

export const Primary = Template.bind({})
Primary.decorators = [
  (story: () => any) => (
    <Provider store={storeWithBrowseData}>{story()}</Provider>
  ),
]
export const Loading = Template.bind({})
Loading.decorators = [
  (story: () => any) => <Provider store={storeWithLoading}>{story()}</Provider>,
]
export const Error = Template.bind({})
Error.decorators = [
  (story: () => any) => <Provider store={storeWithError}>{story()}</Provider>,
]

export const WithWishlisted = Template.bind({})
WithWishlisted.decorators = [
  (story: () => any) => (
    <Provider store={storeWithBrowseDataWithWishlisted}>{story()}</Provider>
  ),
]
export const WithInCartItems = Template.bind({})
WithInCartItems.decorators = [
  (story: () => any) => (
    <Provider store={storeWithBrowseDataWithInCartItems}>{story()}</Provider>
  ),
]
export const WithPurchasedItems = Template.bind({})
WithPurchasedItems.decorators = [
  (story: () => any) => (
    <Provider store={storeWithBrowseDataWithInPurchasedItems}>
      {story()}
    </Provider>
  ),
]
