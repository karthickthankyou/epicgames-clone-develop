import React from 'react'
import { render } from '@testing-library/react'
import Slider from './Slider'

describe('Slider Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Slider />)
    expect(asFragment()).toMatchSnapshot()
  })
})
