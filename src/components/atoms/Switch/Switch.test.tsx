import React from 'react'
import { render } from '@testing-library/react'
import Switch from './Switch'

describe('Switch Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Switch />)
    expect(asFragment()).toMatchSnapshot()
  })
})
