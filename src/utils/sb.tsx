import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { store } from '@store/store'
import { StoryFn } from '@storybook/addons'

export const SbReduxProvider = (story: StoryFn<ReactElement>) => (
  <Provider store={store}>{story()}</Provider>
)
