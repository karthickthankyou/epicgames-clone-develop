import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard05 from './GameCard05'

export default {
  title: 'molecules/GameCard05',
  component: GameCard05,
} as ComponentMeta<typeof GameCard05>

const Template: ComponentStory<typeof GameCard05> = () => <GameCard05 />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
