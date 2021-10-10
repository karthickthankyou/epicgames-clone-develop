import { render, screen } from '@testing-library/react'
import { axeViolations } from 'src/utils/testUtils'
import userEvent from '@testing-library/user-event'
import Button from '.'

describe('button component', () => {
  const buttonContent = 'Click me 1'
  test('should render with given text', async () => {
    const { container } = render(<Button>{buttonContent}</Button>)
    screen.getByRole('button', {
      name: buttonContent,
    })
    await axeViolations(container)
  })
})

describe('button component clicks', () => {
  let buttonContent = 'Click me 2'
  test('should be clickable', async () => {
    render(<Button fullWidth>{buttonContent}</Button>)
    userEvent.click(
      screen.getByRole('button', {
        name: buttonContent,
      })
    )
  })
  test('should run default click action', async () => {
    buttonContent = 'Click me 3'
    const consoleWarnMock = jest.spyOn(console, 'error').mockImplementation()
    render(<Button fullWidth>{buttonContent}</Button>)
    userEvent.click(
      screen.getByRole('button', {
        name: buttonContent,
      })
    )
    expect(consoleWarnMock).toBeCalledTimes(1)
    consoleWarnMock.mockRestore()
  })
})
