import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard03Section from './GameCard03Section'

export default {
  title: 'organisms/GameCard03Section',
  component: GameCard03Section,
} as ComponentMeta<typeof GameCard03Section>

const Template: ComponentStory<typeof GameCard03Section> = ({
  heading,
  games,
}) => <GameCard03Section heading={heading} games={games} />

export const Primary = Template.bind({})
Primary.args = {
  heading: 'Hello This',
  games: {},
}
Primary.parameters = {}
