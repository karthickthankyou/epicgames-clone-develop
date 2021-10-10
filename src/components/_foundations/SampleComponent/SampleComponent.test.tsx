import { render } from '@testing-library/react'
import SampleComponent from './SampleComponent'

describe('SampleComponent Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<SampleComponent />)
    expect(asFragment()).toMatchSnapshot()
  })
})
