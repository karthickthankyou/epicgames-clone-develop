import React from 'react'
import { render } from '@testing-library/react'
import { setFilterRatingRange } from 'src/store/browseGames'
import { renderWithProviders } from '../../../utils/testUtils'
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
