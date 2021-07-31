import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Cart from './Cart'

export default {
  title: 'organisms/Cart',
  component: Cart,
} as ComponentMeta<typeof Cart>

const Template: ComponentStory<typeof Cart> = () => <Cart />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
