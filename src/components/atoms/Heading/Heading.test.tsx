import { render, screen } from '@testing-library/react'
import { axeViolations } from 'src/utils/testUtils'
import Heading from '.'

describe('header component', () => {
  const headingContent = 'Heading 0'
  test('should render with given text', async () => {
    const { container } = render(<Heading>{headingContent}</Heading>)
    await axeViolations(container)

    expect(screen.getByText(headingContent)).toHaveTextContent(headingContent)
  })
  test('should render with given text with props variant and header type', async () => {
    render(
      <Heading variant='heading-1' headerType='h4'>
        {headingContent}
      </Heading>
    )
    expect(screen.getByText(headingContent)).toHaveTextContent(headingContent)
  })
})
