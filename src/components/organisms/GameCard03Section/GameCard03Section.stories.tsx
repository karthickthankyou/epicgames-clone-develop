import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleSimpleGames } from '@utils/data'
import GameCard03Section from './GameCard03Section'

export default {
  title: 'organisms/GameCard03Section',
  component: GameCard03Section,
} as ComponentMeta<typeof GameCard03Section>

const Template: ComponentStory<typeof GameCard03Section> = (args) => (
  <GameCard03Section {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  newReleases: sampleSimpleGames.slice(0, 6),
  topSellers: sampleSimpleGames.slice(6, 12),
  comingSoon: sampleSimpleGames.slice(12, 18),
}
Primary.parameters = {}
