import { ComponentStory, ComponentMeta } from '@storybook/react'
import { createStore, combineReducers } from '@reduxjs/toolkit'

import userReducer, { initialState as userInitialState } from '@store/userSlice'
import userGamesReducer, {
  initialState as userGamesinitialState,
} from '@store/userGameSlice'
import gamesReducer, {
  initialState as gamesinitialState,
} from '@store/gamesSlice'
import { Provider } from 'react-redux'
import HomeTemplate from './HomeTemplate'

export default {
  title: 'templates/HomeTemplate',
  component: HomeTemplate,
} as ComponentMeta<typeof HomeTemplate>

const Template: ComponentStory<typeof HomeTemplate> = () => <HomeTemplate />

const reducers = {
  userGames: userGamesReducer,
  user: userReducer,
  games: gamesReducer,
}

const state = {
  userGames: userGamesinitialState,
  user: userInitialState,
  games: gamesinitialState,
}

const store = createStore(combineReducers(reducers), state)

export const Primary = Template.bind({})
Primary.decorators = [
  (story: () => any) => <Provider store={store}>{story()}</Provider>,
]
