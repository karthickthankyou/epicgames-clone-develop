import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NotFound from './NotFound'

export default {
  title: 'components/pages/NotFound',
  component: NotFound,
} as ComponentMeta<typeof NotFound>

const Template: ComponentStory<typeof NotFound> = () => <NotFound />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
