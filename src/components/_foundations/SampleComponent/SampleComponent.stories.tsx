import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SampleComponent from './SampleComponent'

export default {
  title: 'components/_foundations/SampleComponent',
  component: SampleComponent,
} as ComponentMeta<typeof SampleComponent>

const Template: ComponentStory<typeof SampleComponent> = () => (
  <SampleComponent />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
