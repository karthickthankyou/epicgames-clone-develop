import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UnderDevelopment from './UnderDevelopment'

export default {
  title: 'organisms/UnderDevelopment',
  component: UnderDevelopment,
} as ComponentMeta<typeof UnderDevelopment>

const Template: ComponentStory<typeof UnderDevelopment> = (args) => (
  <UnderDevelopment text='Sample Text' />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
