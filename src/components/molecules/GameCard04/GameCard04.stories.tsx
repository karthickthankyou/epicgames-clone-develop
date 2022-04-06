import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import image from '@assets/game.jpg'
import { getDates } from '@organisms/GameCard04Section/GameCard04Section'
import GameCard04 from './GameCard04'

export default {
  title: 'molecules/GameCardFree',
  component: GameCard04,
} as ComponentMeta<typeof GameCard04>

const Template: ComponentStory<typeof GameCard04> = (args) => (
  <div className='max-w-sm'>
    <GameCard04 {...args} />
  </div>
)

const { date, nextWeek } = getDates()

export const WeeklyFreeCard = Template.bind({})
WeeklyFreeCard.args = {
  id: '306',
  title: 'Cyberpunk 2077',
  imageUrl: image,
  date,
  free: true,
}
WeeklyFreeCard.parameters = {}

export const MysteryCard = Template.bind({})
MysteryCard.args = {
  id: '306',
  title: 'Cyberpunk 2077',
  imageUrl: image,
  date: nextWeek,
  free: false,
}
MysteryCard.parameters = {}
