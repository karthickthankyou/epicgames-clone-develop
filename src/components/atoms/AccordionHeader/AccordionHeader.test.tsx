import React from 'react'
import { render } from '@testing-library/react'
import AccordionHeader from './AccordionHeader'

describe('AccordionHeader Component', () => {
  const setSelectedProperty = jest.fn()
  test('it should match the snapshot', () => {
    const { asFragment } = render(
      <AccordionHeader
        name='Karthick'
        open={false}
        setOpen={setSelectedProperty}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
