import { render, screen } from '@testing-library/react'
import Badge from '.'

describe('badge component', () => {
  test('should render badge', () => {
    const badgeText = 'hello world'
    render(<Badge badgeText={badgeText} />)
    // screen.debug()
    screen.getByText(badgeText)
  })
})
