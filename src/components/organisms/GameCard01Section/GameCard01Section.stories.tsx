import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleGames } from '@utils/data'
import GameCard01Section from './GameCard01Section'

export default {
  title: 'organisms/GameCard01Section',
  component: GameCard01Section,
} as ComponentMeta<typeof GameCard01Section>

const Template: ComponentStory<typeof GameCard01Section> = (args) => (
  <GameCard01Section {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  heading: 'Most Popular',
  buttonText: 'view more',
  games: sampleGames,
}
Primary.parameters = {}
