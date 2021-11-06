import React from 'react'
import { render } from '@testing-library/react'
import Test from './Test'

describe('Test Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Test />)
    expect(asFragment()).toMatchSnapshot()
  })
})
