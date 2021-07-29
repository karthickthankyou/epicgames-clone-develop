import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard04 from './GameCard04'
import image from '../../../assets/game.jpg'

export default {
  title: 'molecules/GameCard04',
  component: GameCard04,
} as ComponentMeta<typeof GameCard04>

const Template: ComponentStory<typeof GameCard04> = ({
  gameTitle,
  displayImage,
  date,
  free,
}) => (
  <GameCard04
    gameTitle={gameTitle}
    displayImage={displayImage}
    date={date}
    free={free}
  />
)

export const Primary = Template.bind({})
Primary.args = {
  gameTitle: 'Cyberpunk 2077',
  displayImage: image,
  date: '2021-08-10T08:30:00Z',
  free: true,
}
Primary.parameters = {}
