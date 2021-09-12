// import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types'
import { Provider } from 'react-redux'
import { store } from '@store/store'

export const SbReduxProvider = (story: any) => (
  <Provider store={store}>{story()}</Provider>
)
