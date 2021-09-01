import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Spacing from './Spacing'

export default {
  title: '_foundations/4. Spacing',
  component: Spacing,
} as ComponentMeta<typeof Spacing>

const Template: ComponentStory<typeof Spacing> = (args) => <Spacing />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
