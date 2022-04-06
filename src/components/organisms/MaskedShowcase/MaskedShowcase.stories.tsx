import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleGame } from '@epictypes/static'
import { unitsSold, anticipatedBy } from '@utils/data'
import MaskedShowcase from './MaskedShowcase'

export default {
  title: 'organisms/MaskedShowcase',
  component: MaskedShowcase,
} as ComponentMeta<typeof MaskedShowcase>

const Template: ComponentStory<typeof MaskedShowcase> = (args) => (
  <MaskedShowcase {...args} />
)

export const CurrentlyPlaying = Template.bind({})
CurrentlyPlaying.args = {
  title: 'Join the crowd',
  games: unitsSold,
  comment: 'thousand playing right now.',
}
CurrentlyPlaying.parameters = {}

export const LongestGames = Template.bind({})
LongestGames.args = {
  title: 'Perfect for binging',
  games: anticipatedBy,
  comment: 'hours gameplay',
}
LongestGames.parameters = {}
