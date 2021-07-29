import { withDesign } from 'storybook-addon-designs'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from './Footer'

export default {
  title: 'organisms/Footer',
  component: Footer,
  decorators: [withDesign],
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=24%3A40',
  },
}
