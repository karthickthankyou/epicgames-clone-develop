import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavIcon from './NavIcon'

export default {
  title: 'atoms/NavIcon',
  component: NavIcon,
} as ComponentMeta<typeof NavIcon>

const Template: ComponentStory<typeof NavIcon> = () => <NavIcon />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
