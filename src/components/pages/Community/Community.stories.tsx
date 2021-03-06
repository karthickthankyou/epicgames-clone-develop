import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Community from './Community'

export default {
  title: 'templates/Community',
  component: Community,
} as ComponentMeta<typeof Community>

const Template: ComponentStory<typeof Community> = (args) => <Community />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
