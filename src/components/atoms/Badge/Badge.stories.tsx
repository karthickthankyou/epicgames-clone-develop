import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from './Badge'

export default {
  title: 'atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'base game',
}
Primary.parameters = {}

export const Small = Template.bind({})
Small.args = {
  children: 'Small badge',
  size: 'sm',
}
Small.parameters = {}

export const Medium = Template.bind({})
Medium.args = {
  children: 'Medium badge',
  size: 'md',
}
Medium.parameters = {}
export const Large = Template.bind({})
Large.args = {
  children: 'Large badge',
  size: 'lg',
}
Large.parameters = {}
