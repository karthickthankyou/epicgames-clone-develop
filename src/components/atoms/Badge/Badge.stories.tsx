import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from './Badge'

export default {
  title: 'atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = ({ badgeText }) => (
  <Badge badgeText={badgeText} />
)

export const Primary = Template.bind({})
Primary.args = {
  badgeText: 'base game',
}
Primary.parameters = {}
