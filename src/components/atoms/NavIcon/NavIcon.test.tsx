import { screen } from '@testing-library/react'
import { AppleIcon } from 'src/assets'
import { axeViolations, renderWithProviders } from '../../../utils/testUtils'
import NavIcon from '.'

describe('Navicon component', () => {
  const count = 10
  const ariaLabel = 'apple anchor aria label'
  test('should render with given text', async () => {
    renderWithProviders(
      <NavIcon
        IconComponent={AppleIcon}
        count={count}
        ariaLabel={ariaLabel}
        linkTo='/'
      />
    )
    expect(screen.getByText(count)).toHaveTextContent(`${count}`)
    expect(
      screen.getByRole('link', {
        name: ariaLabel,
      })
    ).toHaveAttribute('href', '/')
  })
})
