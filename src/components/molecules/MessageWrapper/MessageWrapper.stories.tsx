import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MessageWrapper from './MessageWrapper'

export default {
  title: 'molecules/MessageWrapper',
  component: MessageWrapper,
} as ComponentMeta<typeof MessageWrapper>

const Template: ComponentStory<typeof MessageWrapper> = (args) => (
  <MessageWrapper {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text placed center inside 1/2 screen height.',
}

export const Custom = Template.bind({})
Custom.args = {
  children: (
    <div>
      <div className='text-lg font-black'>Heading</div>
      <div className='max-w-md mt-2 text-sm text-gray-300'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        ipsum quasi distinctio!
      </div>
    </div>
  ),
}
