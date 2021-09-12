import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider } from '@utils/sb'
import SortDropdown from './SortDropdown'

export default {
  title: 'atoms/SortDropdown',
  component: SortDropdown,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof SortDropdown>

const Template: ComponentStory<typeof SortDropdown> = () => <SortDropdown />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
