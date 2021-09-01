import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MessageWrapper from './MessageWrapper'

export default {
  title: 'components/molecules/MessageWrapper',
  component: MessageWrapper,
} as ComponentMeta<typeof MessageWrapper>

const Template: ComponentStory<typeof MessageWrapper> = () => (
  <MessageWrapper>
    <div>Hello</div>
  </MessageWrapper>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
