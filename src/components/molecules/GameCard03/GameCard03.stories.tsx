import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import image from '@assets/game.jpg'
import GameCard03 from './GameCard03'

export default {
  title: 'molecules/GameCardChip',
  component: GameCard03,
} as ComponentMeta<typeof GameCard03>

const Template: ComponentStory<typeof GameCard03> = (args) => (
  <GameCard03 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  id: '099',
  title: 'Cyber Punk',
  priceInfo: {
    price: 10,
  },
  imageUrl: image,
}
