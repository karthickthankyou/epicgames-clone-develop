import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HiHeart } from 'react-icons/hi'
import HoverIcon from './HoverIcon'

export default {
  title: 'atoms/HoverIcon',
  component: HoverIcon,
} as ComponentMeta<typeof HoverIcon>

const Template: ComponentStory<typeof HoverIcon> = ({
  IconComponent,
  hintText,
}) => (
  <div className='m-20'>
    <HoverIcon IconComponent={IconComponent} hintText={hintText} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  IconComponent: HiHeart,
  hintText: 'Hello World',
}
Primary.parameters = {}
