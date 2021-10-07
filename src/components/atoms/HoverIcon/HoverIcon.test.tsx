import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axeViolations } from 'src/utils/testUtils'
import { slug } from 'src/utils'
import { ReactComponent as AppleIcon } from '../../../assets/svgs/apple.svg'
import HoverIcon from '.'

describe('header component', () => {
  const hintText = 'Hint Text'
  test('should render with given text', async () => {
    const { container } = render(
      <HoverIcon IconComponent={AppleIcon} hintText={hintText} />
    )
    await axeViolations(container)
    expect(screen.queryByText(hintText)).toBeNull()
    userEvent.hover(screen.getByLabelText(slug(hintText)))
    expect(screen.getByText(hintText)).not.toBeNull()
    userEvent.unhover(screen.getByLabelText(slug(hintText)))
    expect(screen.queryByText(hintText)).toBeNull()
    // .toHaveTextContent(hintText)
  })
})
