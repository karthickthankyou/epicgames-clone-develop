import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { StoryFn } from '@storybook/addons'
import { store } from '../store'

export const SbReduxProvider = (story: StoryFn<ReactElement>) => (
  <Provider store={store}>{story()}</Provider>
)
