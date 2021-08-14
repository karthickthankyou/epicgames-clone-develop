import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BrowseGames from './BrowseGames'

export default {
  title: 'pages/BrowseGames',
  component: BrowseGames,
} as ComponentMeta<typeof BrowseGames>

const Template: ComponentStory<typeof BrowseGames> = () => <BrowseGames />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
