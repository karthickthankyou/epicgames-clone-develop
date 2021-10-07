import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { RootState, store as actualStore } from '../store/store'
import { useAppDispatch } from '../store/hooks'

// export const StoreWrapper = ({ children }: { children: ReactElement }) => (
//   <Provider store={store}>{children}</Provider>
// )

export const renderWithProviders = (
  children: ReactElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store: any = actualStore,
  options = {}
) =>
  render(
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  )

export const getDispatch = () => {
  const dispatch = useAppDispatch()
  return dispatch
}

export const axeViolations = async (container: Element) => {
  const results = await axe(container)
  expect(results).toHaveNoViolations()
}
