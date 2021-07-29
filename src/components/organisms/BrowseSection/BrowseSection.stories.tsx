import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BrowseSection from './BrowseSection'

export default {
  title: 'organisms/BrowseSection',
  component: BrowseSection,
} as ComponentMeta<typeof BrowseSection>

const Template: ComponentStory<typeof BrowseSection> = () => <BrowseSection />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=24%3A22',
  },
}
