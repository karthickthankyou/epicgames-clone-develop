import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CustomHelmet from './CustomHelmet'

export default {
  title: 'components/organisms/CustomHelmet',
  component: CustomHelmet,
} as ComponentMeta<typeof CustomHelmet>

const Template: ComponentStory<typeof CustomHelmet> = () => (
  <CustomHelmet title='Hello' description='hello description' />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
