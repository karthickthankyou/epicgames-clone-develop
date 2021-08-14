import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Checkout from './Checkout'

export default {
  title: 'pages/Checkout',
  component: Checkout,
} as ComponentMeta<typeof Checkout>

const Template: ComponentStory<typeof Checkout> = () => <Checkout />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
