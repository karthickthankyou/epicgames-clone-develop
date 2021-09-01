import { Provider } from 'react-redux'
import { store } from '../src/store'

// const store = configureStore()

const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>{children}</Provider>
)

export const withProvider = (story) => (
  <ProviderWrapper store={store}>{story()}</ProviderWrapper>
)
