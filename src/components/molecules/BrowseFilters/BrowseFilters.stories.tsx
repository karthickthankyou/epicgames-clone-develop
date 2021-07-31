import { ComponentStory, ComponentMeta } from '@storybook/react'
import BrowseFilters from './BrowseFilters'

export default {
  title: 'molecules/BrowseFilters',
  component: BrowseFilters,
} as ComponentMeta<typeof BrowseFilters>

const Template: ComponentStory<typeof BrowseFilters> = () => <BrowseFilters />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
