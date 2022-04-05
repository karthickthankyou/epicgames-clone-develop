import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ModernBrowseSection from './ModernBrowseSection'

export default {
  title: 'organisms/ModernBrowseSection',
  component: ModernBrowseSection,
} as ComponentMeta<typeof ModernBrowseSection>

const Template: ComponentStory<typeof ModernBrowseSection> = ({ items }) => (
  <ModernBrowseSection items={items} />
)

export const Primary = Template.bind({})
Primary.args = {
  items: [
    { id: '1', title: 'Hello', subtitle: 'Sub hello' },
    { id: '2', title: 'Hello 2', subtitle: 'Sub hello 2' },
  ],
}
Primary.parameters = {}
