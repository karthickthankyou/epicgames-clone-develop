import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleGame, sampleSimilarGames } from '@utils/data'
import GamePageTemplate from './GamePageTemplate'

export default {
  title: 'templates/GamePageTemplate',
  component: GamePageTemplate,
} as ComponentMeta<typeof GamePageTemplate>

const Template: ComponentStory<typeof GamePageTemplate> = (args) => (
  <GamePageTemplate {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  game: sampleGame,
  similarGames: sampleSimilarGames,
}
Primary.parameters = {}
