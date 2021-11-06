import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Test from './Test'

export default {
  title: 'atoms/Test',
  component: Test,
} as ComponentMeta<typeof Test>

const Template: ComponentStory<typeof Test> = (args) => <Test />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
