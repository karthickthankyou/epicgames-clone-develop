import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Shadows from './Shadows'

export default {
  title: '_foundations/3. Shadows',
  component: Shadows,
} as ComponentMeta<typeof Shadows>

const Template: ComponentStory<typeof Shadows> = () => <Shadows />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
