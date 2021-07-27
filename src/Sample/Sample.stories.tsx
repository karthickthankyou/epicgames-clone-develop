import { withDesign } from 'storybook-addon-designs'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Sample, { ISampleProps } from './Sample'

export default {
  title: 'Pages/Sample',
  component: Sample,
  decorators: [withDesign],
} as ComponentMeta<ISampleProps>

const Template: ComponentStory<ISampleProps> = () => <Sample />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=14%3A75',
  },
}
