import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { defaultAsyncGame } from 'src/types/static'
import image from '../../../assets/game.jpg'
import GameCard02 from './GameCard02'

export default {
  title: 'molecules/GameCard02',
  component: GameCard02,
} as ComponentMeta<typeof GameCard02>

const Template: ComponentStory<typeof GameCard02> = ({ game }) => (
  <GameCard02 game={game} />
)

export const Primary = Template.bind({})
Primary.args = {
  game: defaultAsyncGame.data || undefined,
}
Primary.parameters = {}
