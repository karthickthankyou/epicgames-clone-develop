import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 'md',
  variant: 'contained',
  children: 'Hello World',
}
export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  children: 'Small',
}
export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  children: 'Medium',
}
export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  children: 'Large',
}
export const XL = Template.bind({})
XL.args = {
  size: 'xl',
  children: 'Xtra Large',
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  children: 'Outlined',
}

export const Red = Template.bind({})
Red.args = {
  size: 'md',
  color: 'red',
  variant: 'contained',
  children: 'Hello World',
}
export const Green = Template.bind({})
Green.args = {
  size: 'md',
  color: 'green',
  variant: 'contained',
  children: 'Hello World',
}
