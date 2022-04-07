import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import userGamesReducer, {
  initialState as userGamesinitialState,
} from '@store/userGameSlice'
import userReducer, { initialState as userinitialState } from '@store/userSlice'
import { getUserGameIdList, sampleGames } from '@utils/data'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Checkout from './Checkout'

export default {
  title: 'pages/Checkout',
  component: Checkout,
} as ComponentMeta<typeof Checkout>

const Template: ComponentStory<typeof Checkout> = () => <Checkout />

const reducers = {
  userGames: userGamesReducer,
  user: userReducer,
}

const stateWithInCartItems = {
  userGames: {
    ...userGamesinitialState,
    cartGames: sampleGames.filter((item) => item.inCart),
  },
}
const stateWithInCartItemsLong = {
  userGames: {
    ...userGamesinitialState,
    cartGames: sampleGames,
  },
}

const storeWithCartItems = createStore(
  combineReducers(reducers),
  stateWithInCartItems
)
const storeWithCartItemsLong = createStore(
  combineReducers(reducers),
  stateWithInCartItemsLong
)
const storeWithNoCartItems = createStore(combineReducers(reducers), {
  userGames: {
    ...userGamesinitialState,
    cartGameIds: [],
  },
})

export const Primary = Template.bind({})
Primary.decorators = [
  (story: () => any) => (
    <Provider store={storeWithCartItems}>{story()}</Provider>
  ),
]
export const Long = Template.bind({})
Long.decorators = [
  (story: () => any) => (
    <Provider store={storeWithCartItemsLong}>{story()}</Provider>
  ),
]
export const NoResults = Template.bind({})
NoResults.decorators = [
  (story: () => any) => (
    <Provider store={storeWithNoCartItems}>{story()}</Provider>
  ),
]
