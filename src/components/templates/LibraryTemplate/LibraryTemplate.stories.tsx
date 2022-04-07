import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleWishlistGames } from '@utils/data'
import LibraryTemplate from './LibraryTemplate'

export default {
  title: 'templates/LibraryTemplate',
  component: LibraryTemplate,
} as ComponentMeta<typeof LibraryTemplate>

const Template: ComponentStory<typeof LibraryTemplate> = (args) => (
  <LibraryTemplate {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  purchased: sampleWishlistGames,
}

export const Empty = Template.bind({})
Empty.args = {
  purchased: [],
}
