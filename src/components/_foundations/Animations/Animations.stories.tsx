import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Animations from './Animations'

export default {
  title: '_foundations/Animations',
  component: Animations,
} as ComponentMeta<typeof Animations>

const Template: ComponentStory<typeof Animations> = ({
  children = 'Hello World',
  className,
}) => (
  <div className='flex items-center justify-center w-screen h-screen'>
    <div className='flex items-center justify-center h-64 max-w-md p-6 font-serif text-white border border-white rounded shadow-xl w-128 shadow-black/20 bg-primary-600'>
      <Animations className={className}>{children}</Animations>
    </div>
  </div>
)

export const Pulse = Template.bind({})
Pulse.args = {
  className: 'animate-pulse ',
  children: (
    <div className='flex flex-col items-center'>
      <div>Hello world.</div>
      <div>
        Welcome to <span className='font-black '>EPIC</span> Clone
      </div>
    </div>
  ),
}

export const Spin = Template.bind({})
Spin.args = {
  className: 'animate-spin  ',
}

export const Bounce = Template.bind({})
Bounce.args = {
  className: 'animate-bounce  ',
}

export const Ping = Template.bind({})
Ping.args = {
  className: 'animate-ping  ',
}
