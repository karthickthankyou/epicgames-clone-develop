import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Specifications from './Specifications'

export default {
  title: 'molecules/Specifications',
  component: Specifications,
} as ComponentMeta<typeof Specifications>

const Template: ComponentStory<typeof Specifications> = () => <Specifications />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
