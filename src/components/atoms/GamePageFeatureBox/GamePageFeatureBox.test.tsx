import { render, screen } from '@testing-library/react'
import GamePageFeatureBox from '.'

describe('badge component', () => {
  test('should render badge', () => {
    const title = 'Name'
    const value = 'John Doe'
    render(<GamePageFeatureBox title={title} value={value} />)
    screen.getByText(title)
    screen.getByText(value)
  })
})
