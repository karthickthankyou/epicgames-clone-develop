import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { screen, waitFor } from '@testing-library/react'
import App from './App'
import { renderWithProviders } from './utils/testUtils'

jest.mock('./firebase/hooks')

describe('Components with redux', () => {
  test('wrapped with store', () => {
    renderWithProviders(<App />)
  })
  test('initialize a custom store', async () => {
    const msg = 'Redux rocks'
    const store = configureStore({
      reducer: {
        user: createSlice({
          name: 'dummy',
          initialState: { msg },
          reducers: {},
        }).reducer,
      },
    })

    type RootState = ReturnType<typeof store.getState>

    const DummyComponent = () => {
      const { msg: msgToRender } = useSelector((state: RootState) => state.user)
      return <>{msgToRender}</>
    }

    renderWithProviders(<DummyComponent />, store)
    // screen.debug()
    await waitFor(() => expect(screen.getByText(msg)).toHaveTextContent(msg))
  })

  // test('mock a custom hook', () => {
  //   // const dispatch = getDispatch()
  //   const msg = 'Redux rocks'
  //   const mockAddListener = jest.spyOn(hooks, 'useGamesListener') // spy on foo.addListener
  //   mockAddListener.mockImplementation(() => msg)
  //   const DummyComponent = () => {
  //     const result = hooks.useGamesListener()
  //     return <>{result}</>
  //   }

  //   renderWithProviders(<DummyComponent />)
  //   expect(screen.queryByText(msg)).toHaveTextContent(msg)
  //   // screen.debug()
  // })
  // test('dispatch an action from the mocked hook', async () => {
  //   function useGetHomeGames() {
  //     const dispatch = useAppDispatch()
  //     dispatch(setHighestEverDiscounts([])) // [{ game: 'asdf' }]
  //     return null
  //   }

  //   const mockAddListener = jest.spyOn(hooks, 'useGetHomeGames')
  //   mockAddListener.mockImplementation(useGetHomeGames)
  //   renderWithProviders(<App />)
  //   // screen.debug()
  //   await waitFor(() =>
  //     screen.getByTestId(slug('Highest Discounts Ever Recorded'))
  //   )

  //   // screen.debug(container)
  //   // console.log(wishlistedGames.length)
  //   // wishlistedGames.forEach(({ title, publisherId }) => {
  //   //   expect(within(container).getByText(title)).toHaveTextContent(title)
  //   //   expect(
  //   //     within(container).getByText(readable(publisherId))
  //   //   ).toHaveTextContent(readable(publisherId))
  //   // })
  //   // screen.getByText(container, 'Goodbye world')
  // })

  // test('testing the complete mock', () => {
  //   renderWithProviders(<App />)

  //   // screen.debug()
  // })
})
