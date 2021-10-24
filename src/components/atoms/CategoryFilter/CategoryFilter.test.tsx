import React from 'react'
import { genres } from 'src/types/static'
import { renderWithProviders } from 'src/utils/testUtils'
import { setFilterTags } from 'src/store/browserGames'
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
