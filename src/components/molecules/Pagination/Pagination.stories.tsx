import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Pagination from './Pagination'

export default {
  title: 'molecules/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  current: 0,
  total: 10,
}
Primary.parameters = {}

export const Huge = Template.bind({})
Huge.args = {
  current: 0,
  total: 100,
}
Huge.parameters = {}

export const HugeMiddleNumber = Template.bind({})
HugeMiddleNumber.args = {
  current: 50,
  total: 100,
}
HugeMiddleNumber.parameters = {}
