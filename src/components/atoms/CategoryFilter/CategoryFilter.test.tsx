import React from 'react'
import { genres } from 'src/types/static'
import { setFilterTags } from 'src/store/browseGames'
import { renderWithProviders } from '../../../utils/testUtils'
import CategoryFilter from './CategoryFilter'

describe('CategoryFilter Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = renderWithProviders(
      <CategoryFilter
        name='Karthick'
        options={genres}
        action={setFilterTags}
        displayState={['state']}
        facet={{
          tags: 1,
          notes: 2,
          platform: 3,
        }}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
