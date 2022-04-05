/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard07 from './GameCard07'

export default {
  title: 'molecules/GameCard07',
  component: GameCard07,
} as ComponentMeta<typeof GameCard07>

const Template: ComponentStory<typeof GameCard07> = (args) => (
  <GameCard07 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  game: {},
}
Primary.parameters = {}
