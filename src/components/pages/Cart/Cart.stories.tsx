import { ComponentStory, ComponentMeta } from '@storybook/react'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import userGamesReducer, { initialState } from '@store/userGameSlice'
import userReducer, { initialState as userInitialState } from '@store/userSlice'
import { Provider } from 'react-redux'

import { Game } from '@epictypes/index'
import { sampleUserGames } from '@utils/data'
import Cart from './Cart'

export default {
  title: 'pages/Cart',
  component: Cart,
} as ComponentMeta<typeof Cart>
const Template: ComponentStory<typeof Cart> = () => <Cart />

const storeWithCardData = createStore(
  combineReducers({ userGames: userGamesReducer, user: userReducer }),
  {
    userGames: {
      ...initialState,
      cartGames: sampleUserGames.filter(
        (game) => game.inCart
      ) as unknown as Game[],
    },
    user: userInitialState,
  }
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [
  (story: () => any) => (
    <Provider store={storeWithCardData}>{story()}</Provider>
  ),
]
