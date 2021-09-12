import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleGame } from '@epictypes/static'
import MaskedShowcase from './MaskedShowcase'

export default {
  title: 'organisms/MaskedShowcase',
  component: MaskedShowcase,
} as ComponentMeta<typeof MaskedShowcase>

const Template: ComponentStory<typeof MaskedShowcase> = (args) => (
  // @ts-ignore
  <MaskedShowcase games={[sampleGame]} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
