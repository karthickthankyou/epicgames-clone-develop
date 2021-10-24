import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'src/utils/testUtils'
import { genres, platforms, events } from 'src/types/static'
import BrowseFilters from '.'

const filterMainOptions = [
  { title: /EVENTS/i, options: events },
  { title: /PRICE/i, options: [] },
  { title: /DISCOUNT/i, options: [] },
  { title: /RATING/i, options: [] },
  { title: /GENRE/i, options: genres },
  { title: /PLATFORM/i, options: platforms },
]
describe('BrowseFilters component: initial stage', () => {
  beforeEach(() => {
    renderWithProviders(<BrowseFilters />)
  })
  test('should render', () => {
    filterMainOptions.forEach((option) =>
      expect(screen.getByText(option.title)).toHaveTextContent(option.title)
    )
  })
  test('should have selected filter count null.', () => {
    expect(screen.queryByTestId('selectedFiltersCount')).toBeNull()
  })
  test('should have reset button disabled.', () => {
    expect(
      screen.getByRole('button', {
        name: /reset/i,
      })
    ).toBeDisabled()
  })
})
describe('BrowseFilters component: initial stage', () => {
  beforeEach(() => {
    renderWithProviders(<BrowseFilters />)
  })
  test('should be able to expand a category filter', () => {
    const { title, options } = filterMainOptions[0]
    const firstMainFilter = screen.getByRole('button', {
      name: title,
    })
    userEvent.click(firstMainFilter)
    options.forEach((option) =>
      expect(screen.getByText(option)).toHaveTextContent(option)
    )
  })
  test('should be able to expand another category filter', () => {
    const { title, options } = filterMainOptions[4]
    const fourthMainFilter = screen.getByRole('button', {
      name: title,
    })
    userEvent.click(fourthMainFilter)
    options.forEach((option) =>
      expect(screen.getByText(option)).toHaveTextContent(option)
    )
  })
})
describe('BrowseFilters component: check categories', () => {
  const item = 0
  beforeEach(() => {
    renderWithProviders(<BrowseFilters />)
    const { title } = filterMainOptions[+item]
    const firstMainFilter = screen.getByRole('button', {
      name: title,
    })
    userEvent.click(firstMainFilter)
  })
  test('should be able to expand a category filter', () => {
    const { options } = filterMainOptions[+item]

    options.forEach((option) =>
      expect(screen.getByText(option)).toHaveTextContent(option)
    )

    const listChildOne = screen.getByRole('button', {
      name: options[1],
    })
    expect(within(listChildOne).queryByTestId(/itemSelected/i)).toBeNull()
    userEvent.click(listChildOne)
    expect(within(listChildOne).getByTestId(/itemSelected/i)).not.toBeNull()
  })
})
