import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Pagination from './Pagination'

export default {
  title: 'molecules/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = ({ current, total }) => (
  <Pagination current={current} total={total} />
)

export const Primary = Template.bind({})
Primary.args = {
  current: 1,
  total: 10,
}
Primary.parameters = {}
