import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GameGenre } from 'src/types'
import { genres } from 'src/types/static'
import { setFilterTags } from '../../../store/browseGames'
import CategoryFilter from './CategoryFilter'

export default {
  title: 'atoms/CategoryFilter',
  component: CategoryFilter,
} as ComponentMeta<typeof CategoryFilter>

const Template: ComponentStory<typeof CategoryFilter> = ({
  name,
  options,
  action,
  displayState,
  facet,
}) => (
  <CategoryFilter<GameGenre>
    name={name}
    options={genres}
    action={setFilterTags}
    displayState={displayState}
    facet={facet}
  />
)

export const Primary = Template.bind({})
Primary.args = {
  name: 'hi',
  displayState: false,
  facet: [],
}
Primary.parameters = {}
