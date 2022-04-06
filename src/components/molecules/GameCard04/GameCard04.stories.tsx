import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import image from '@assets/game.jpg'
import { getDates } from '@utils/index'
import GameCardFree from './GameCard04'

export default {
  title: 'molecules/GameCardFree',
  component: GameCardFree,
} as ComponentMeta<typeof GameCardFree>

const Template: ComponentStory<typeof GameCardFree> = (args) => (
  <div className='max-w-sm'>
    <GameCardFree {...args} />
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
