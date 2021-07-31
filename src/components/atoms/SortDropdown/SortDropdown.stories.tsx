import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SortDropdown from './SortDropdown'

export default {
  title: 'atoms/SortDropdown',
  component: SortDropdown,
} as ComponentMeta<typeof SortDropdown>

const Template: ComponentStory<typeof SortDropdown> = ({ sortByOptions }) => (
  <SortDropdown sortByOptions={sortByOptions} />
)

const sortByOptions = [
  'Relevance',
  'New Release',
  'Release Date',
  'Alphabetical',
  'Price: Low to High',
  'Price: High to Low',
]

export const Primary = Template.bind({})
Primary.args = { sortByOptions }
Primary.parameters = {}
