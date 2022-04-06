import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading from './Heading'

export default {
  title: 'atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = ({ variant, children }) => (
  <div>
    <hr className='border-gray-600' />
    <Heading headerType='h3' variant={variant}>
      {children}
    </Heading>
    <hr className='border-gray-600' />
  </div>
)

export const Heading0 = Template.bind({})
Heading0.args = {
  variant: 'heading-0',
  children: 'Heading 0',
}

export const Heading1 = Template.bind({})
Heading1.args = {
  variant: 'heading-1',
  children: 'Heading 1',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  variant: 'heading-2',
  children: 'Heading 2',
}
