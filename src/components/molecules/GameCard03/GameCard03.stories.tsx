import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import image from '../../../assets/game.jpg'
import GameCard03 from './GameCard03'

export default {
  title: 'molecules/GameCard03',
  component: GameCard03,
} as ComponentMeta<typeof GameCard03>

const Template: ComponentStory<typeof GameCard03> = ({ game }) => (
  <GameCard03 game={game} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
