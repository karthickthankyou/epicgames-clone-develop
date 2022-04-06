import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Text from './Text'

export default {
  title: 'atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => (
  <div>
    {/* The hrs are for showing the margins */}
    <hr className='border-gray-600' />
    <Text {...args} />
    <hr className='border-gray-600' />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  size: 'text-lg',
  muted: 'inherit',
  mb: 'mb-0',
  weight: 'font-normal',
  children: 'Hello World you there?',
}

export const XS = Template.bind({})
XS.args = {
  size: 'text-xs',
  muted: 'inherit',
  children: 'Xtra small',
}

export const SM = Template.bind({})
SM.args = {
  size: 'text-sm',
  children: 'Xtra small',
}

export const Base = Template.bind({})
Base.args = {
  size: 'text-base',
  children: 'Base size',
}

export const Large = Template.bind({})
Large.args = {
  size: 'text-lg',
  children: 'Large size',
}

export const XLarge = Template.bind({})
XLarge.args = {
  size: 'text-xl',
  children: 'XL size',
}

export const XXLarge = Template.bind({})
XXLarge.args = {
  size: 'text-2xl',
  children: 'XXL size',
}

export const Thin = Template.bind({})
Thin.args = {
  size: 'text-2xl',
  weight: 'font-thin',
  children: 'Thin',
}

export const Black = Template.bind({})
Black.args = {
  size: 'text-2xl',
  weight: 'font-black',
  children: 'Black',
}

export const MarginBotton0 = Template.bind({})
MarginBotton0.args = {
  size: 'text-2xl',
  weight: 'font-black',
  mb: 'mb-0',
  children: 'No margin bottom',
}

export const MarginBotton12 = Template.bind({})
MarginBotton12.args = {
  size: 'text-2xl',
  weight: 'font-black',
  mb: 'mb-12',
  children: 'Margin bottom 12',
}
