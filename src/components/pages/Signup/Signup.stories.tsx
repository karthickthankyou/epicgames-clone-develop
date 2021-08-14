import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Signup from './Signup'

export default {
  title: 'pages/Signup',
  component: Signup,
} as ComponentMeta<typeof Signup>

const Template: ComponentStory<typeof Signup> = () => <Signup />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
