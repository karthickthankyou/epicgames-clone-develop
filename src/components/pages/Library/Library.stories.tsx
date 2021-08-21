import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Library from './Library'

export default {
  title: 'pages/Library',
  component: Library,
} as ComponentMeta<typeof Library>

const Template: ComponentStory<typeof Library> = () => <Library />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
