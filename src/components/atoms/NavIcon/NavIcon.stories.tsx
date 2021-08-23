import React from 'react'
import { FiActivity } from 'react-icons/fi'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavIcon from './NavIcon'

export default {
  title: 'atoms/NavIcon',
  component: NavIcon,
} as ComponentMeta<typeof NavIcon>

const Template: ComponentStory<typeof NavIcon> = () => (
  <NavIcon IconComponent={FiActivity} count={45} linkTo='/lk' />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
