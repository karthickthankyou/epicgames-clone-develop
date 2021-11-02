import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../../utils/testUtils'
import SortDropdown from '.'

describe('price component', () => {
  test('should render free component', () => {
    const sortOptions = [
      /Recently Added/i,
      /On Sale/i,
      /Price: Low to High/i,
      /Price: High to Low/i,
      /Highest Rated/i,
    ]
    renderWithProviders(<SortDropdown />)
    const button = screen.getByRole('button', {
      name: 'sortByOptions',
    })

    expect(button).toHaveTextContent(/sortby/i)
    expect(button).toHaveTextContent(sortOptions[0])
    expect(screen.getByLabelText('sortIconChevDown')).toBeInTheDocument()
    expect(screen.queryByLabelText('sortIconChevUp')).toBeNull()

    userEvent.click(
      screen.getByRole('button', {
        name: 'sortByOptions',
      })
    )

    expect(screen.queryByLabelText('sortIconChevDown')).toBeNull()
    expect(screen.getByLabelText('sortIconChevUp')).toBeInTheDocument()

    const optionList = screen.getByTestId('sortOptionsList')

    sortOptions.forEach((item) => {
      expect(optionList).toHaveTextContent(item)
    })

    // Click the 2nd option and verifiy
    userEvent.click(
      screen.getByRole('button', {
        name: sortOptions[2],
      })
    )

    expect(button).toHaveTextContent(sortOptions[2])
    expect(button).not.toHaveTextContent(sortOptions[0])
  })
})
