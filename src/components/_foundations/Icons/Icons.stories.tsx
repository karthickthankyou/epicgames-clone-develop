import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icons from './Icons'

export default {
  title: '_foundations/6. Icons',
  component: Icons,
} as ComponentMeta<typeof Icons>

const Template: ComponentStory<typeof Icons> = (args) => <Icons />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
