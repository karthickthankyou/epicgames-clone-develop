import React from 'react'
import { render } from '@testing-library/react'
import Accordion from './Accordion'

describe('Accordion Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Accordion />)
    expect(asFragment()).toMatchSnapshot()
  })
})
