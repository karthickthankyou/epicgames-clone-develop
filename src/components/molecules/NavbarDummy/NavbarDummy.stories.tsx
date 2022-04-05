import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavbarDummy from './NavbarDummy'

export default {
  title: 'molecules/NavbarDummy',
  component: NavbarDummy,
} as ComponentMeta<typeof NavbarDummy>

const Template: ComponentStory<typeof NavbarDummy> = (args) => <NavbarDummy />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
