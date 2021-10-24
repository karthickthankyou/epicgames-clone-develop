import React from 'react'
import { render } from '@testing-library/react'
import { renderWithProviders } from 'src/utils/testUtils'
import { setFilterRatingRange } from 'src/store/browserGames'
import RangeFilter from '.'

describe('RangeFilter Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = renderWithProviders(
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
