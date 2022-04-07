import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CancelPayment from './CancelPayment'

export default {
  title: 'templates/CancelPayment',
  component: CancelPayment,
} as ComponentMeta<typeof CancelPayment>

const Template: ComponentStory<typeof CancelPayment> = (args) => (
  <CancelPayment />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
