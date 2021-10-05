import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from '@cypress/react'
import { RootState, store as actualStore } from '../store/store'
import { useAppDispatch } from '../store/hooks'
import '../index.css'

// export const StoreWrapper = ({ children }: { children: ReactElement }) => (
//   <Provider store={store}>{children}</Provider>
// )

export const mountCustom = (jsx: ReactElement) =>
  mount(
    <Router>
      <Provider store={actualStore}>{jsx}</Provider>
    </Router>
  )

export const renderWithProviders = (
  children: ReactElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store: any = actualStore,
  options = {}
) => {
  render(<Provider store={store}>{children}</Provider>)
}

export const getDispatch = () => {
  const dispatch = useAppDispatch()
  return dispatch
}
