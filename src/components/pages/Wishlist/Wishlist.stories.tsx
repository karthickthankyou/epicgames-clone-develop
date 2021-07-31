import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Wishlist from './Wishlist'

export default {
  title: 'pages/Wishlist',
  component: Wishlist,
} as ComponentMeta<typeof Wishlist>

const Template: ComponentStory<typeof Wishlist> = () => <Wishlist />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
