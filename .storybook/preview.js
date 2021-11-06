import { addDecorator } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import { DocsPage } from 'storybook-addon-deps/blocks'
import { Provider } from 'react-redux'
import { store } from '../src/store/index.ts'
import 'src/index.css'
import yourTheme from './EpicTheme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: yourTheme,
    // page: DocsPage,
  },
  // dependencies: { withStoriesOnly: true, hideEmpty: true },
}

// addParameters({
//   docs: { page: DocsPage },
//   dependencies: { withStoriesOnly: true, hideEmpty: true },
// })

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
]
