import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SigninTemplate from './SigninTemplate'

export default {
  title: 'templates/SigninTemplate',
  component: SigninTemplate,
} as ComponentMeta<typeof SigninTemplate>

const Template: ComponentStory<typeof SigninTemplate> = () => <SigninTemplate />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
