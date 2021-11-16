import React from 'react'
import { render } from '@testing-library/react'
import Checkbox from './Checkbox'

describe('Checkbox Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Checkbox />)
    expect(asFragment()).toMatchSnapshot()
  })
})
