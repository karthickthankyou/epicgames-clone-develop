/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard07 from './GameCard07'

export default {
  title: 'molecules/LibraryCard',
  component: GameCard07,
} as ComponentMeta<typeof GameCard07>

const Template: ComponentStory<typeof GameCard07> = (args) => (
  <GameCard07 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  game: {
    title: 'Flowers in hell',
    imageUrl:
      'https://res.cloudinary.com/thankyou/image/upload/v1621430541/sample.jpg',
  },
}
Primary.parameters = {}
