import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ReactComponent as EducationIcon } from '../../../assets/svgs/education.svg'
import NavIcon from './NavIcon'

export default {
  title: 'atoms/NavIcon',
  component: NavIcon,
} as ComponentMeta<typeof NavIcon>

const Template: ComponentStory<typeof NavIcon> = () => (
  <NavIcon IconComponent={EducationIcon} count={45} linkTo='/lk' />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
