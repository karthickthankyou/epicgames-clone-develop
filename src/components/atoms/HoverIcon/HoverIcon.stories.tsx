import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ReactComponent as Heart } from '@assets/svgs/heart.svg'
import HoverIcon from './HoverIcon'

export default {
  title: 'atoms/HoverIcon',
  component: HoverIcon,
} as ComponentMeta<typeof HoverIcon>

const Template: ComponentStory<typeof HoverIcon> = (args) => (
  <div className='m-20'>
    <HoverIcon {...args} />
  </div>
)

export const Top = Template.bind({})
Top.args = {
  IconComponent: Heart,
  hintText: 'Top hint',
  position: 'top',
}

export const Right = Template.bind({})
Right.args = {
  IconComponent: Heart,
  hintText: 'Right hint',
  position: 'right',
}

export const Bottom = Template.bind({})
Bottom.args = {
  IconComponent: Heart,
  hintText: 'Bottom hint',
  position: 'bottom',
}

export const Left = Template.bind({})
Left.args = {
  IconComponent: Heart,
  hintText: 'Left hint',
  position: 'left',
}
