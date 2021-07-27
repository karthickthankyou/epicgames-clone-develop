import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Story, Meta } from '@storybook/react/types-6-0'
import Sample, { ISampleProps } from './Sample'

export default {
  title: 'Pages/Sample',
  component: Sample,
  decorators: [withDesign],
} as Meta

const Template: Story<ISampleProps> = (args) => <Sample {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=14%3A75',
  },
}
