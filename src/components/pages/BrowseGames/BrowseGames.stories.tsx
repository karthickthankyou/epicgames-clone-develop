import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BrowseGames from './BrowseGames'
import { SbReduxProvider } from '../../../utils/sb'

export default {
  title: 'pages/BrowseGames',
  component: BrowseGames,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof BrowseGames>

const Template: ComponentStory<typeof BrowseGames> = () => <BrowseGames />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
