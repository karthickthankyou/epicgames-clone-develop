import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SortDropdown from './SortDropdown'
import { SbReduxProvider } from '../../../utils/sb'

export default {
  title: 'atoms/SortDropdown',
  component: SortDropdown,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof SortDropdown>

const Template: ComponentStory<typeof SortDropdown> = () => <SortDropdown />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
