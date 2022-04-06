import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import EmptyList from './EmptyList'

export default {
  title: 'molecules/EmptyList',
  component: EmptyList,
} as ComponentMeta<typeof EmptyList>

const Template: ComponentStory<typeof EmptyList> = (args) => (
  <EmptyList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Your wishlist is empty',
  description: 'Games added to your wishlist will appear here',
  buttonText: 'back to store',
  linkTo: '/',
}

export const Cart = Template.bind({})
Cart.args = {
  title: 'Your cart is empty',
  description: 'Custom message here.',
  buttonText: 'Back to store',
  linkTo: '/',
}
