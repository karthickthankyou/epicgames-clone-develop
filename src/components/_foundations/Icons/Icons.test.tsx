import React from 'react'
import { render } from '@testing-library/react'
import Icons from './Icons'

describe('Icons Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Icons />)
    expect(asFragment()).toMatchSnapshot()
  })
})
