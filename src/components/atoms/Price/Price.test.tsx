import { render, screen } from '@testing-library/react'
import Price from '.'

describe('price component', () => {
  test('should render free component', () => {
    render(<Price price={0} discount={10} sections={[]} />)
    screen.getByText(/free/i)
  })
  test('should render without discount', () => {
    render(<Price price={10} discount={10} sections={[]} />)
    screen.getByText(/₹10.00/i)
  })
  test('should render with discount', () => {
    render(<Price price={45} discount={10} sections={[]} />)
    // screen.debug()
    expect(screen.getByText('₹45.00')).toHaveTextContent('₹45.00')
    expect(screen.getByText('₹40.50')).toHaveTextContent('₹40.50')
  })
  test('should render coming soon', () => {
    render(<Price price={45} comingSoon discount={10} sections={[]} />)
    // screen.debug()
    screen.getByText(/coming soon/i)
  })
})
