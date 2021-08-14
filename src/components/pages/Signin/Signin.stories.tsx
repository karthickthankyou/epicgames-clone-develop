import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Signin from './Signin'

export default {
  title: 'pages/Signin',
  component: Signin,
} as ComponentMeta<typeof Signin>

const Template: ComponentStory<typeof Signin> = () => <Signin />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
