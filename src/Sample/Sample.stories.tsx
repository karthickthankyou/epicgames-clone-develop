import { withDesign } from 'storybook-addon-designs'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Sample from './Sample'

export default {
  title: 'Pages/Sample',
  component: Sample,
  decorators: [withDesign],
} as ComponentMeta<typeof Sample>

const Template: ComponentStory<typeof Sample> = () => <Sample />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=14%3A75',
  },
}
