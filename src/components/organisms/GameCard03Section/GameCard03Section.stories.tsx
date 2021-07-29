import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard03Section from './GameCard03Section'

export default {
  title: 'organisms/GameCard03Section',
  component: GameCard03Section,
} as ComponentMeta<typeof GameCard03Section>

const Template: ComponentStory<typeof GameCard03Section> = () => (
  <GameCard03Section />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
