import React from 'react'
import { render } from '@testing-library/react'
import { setFilterRatingRange } from 'src/store/browserGames'
import RangeFilter from './RangeFilter'

describe('RangeFilter Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(
      <RangeFilter
        name='Karthick'
        min={0}
        max={12}
        action={setFilterRatingRange}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
