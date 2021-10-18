import React from 'react'
import { render } from '@testing-library/react'
import { genres } from 'src/types/static'
import { setFilterTags } from 'src/store/browserGames'
import CategoryFilter from './CategoryFilter'

describe('CategoryFilter Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(
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
