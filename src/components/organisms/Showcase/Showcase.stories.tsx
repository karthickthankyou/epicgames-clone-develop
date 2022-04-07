import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Showcase from './Showcase'

export default {
  title: 'organisms/Showcase',
  component: Showcase,
} as ComponentMeta<typeof Showcase>

const Template: ComponentStory<typeof Showcase> = (args) => (
  <Showcase {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
