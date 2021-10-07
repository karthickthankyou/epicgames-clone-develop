import { render, screen } from '@testing-library/react'
import { axeViolations } from 'src/utils/testUtils'
import userEvent from '@testing-library/user-event'
import Button from '.'

describe('button component', () => {
  const buttonContent = 'Click me'
  test('should render with given text', async () => {
    const { container } = render(<Button>{buttonContent}</Button>)
    screen.getByRole('button', {
      name: buttonContent,
    })
    await axeViolations(container)
  })

  test('should be clickable', async () => {
    const mockCallback = jest.fn()
    const { container } = render(
      <Button clickAction={mockCallback}>{buttonContent}</Button>
    )
    await axeViolations(container)
    userEvent.click(
      screen.getByRole('button', {
        name: buttonContent,
      })
    )
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
