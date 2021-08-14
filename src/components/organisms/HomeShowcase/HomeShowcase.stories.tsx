import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomeShowcase from './HomeShowcase'

export default {
  title: 'organisms/HomeShowcase',
  component: HomeShowcase,
} as ComponentMeta<typeof HomeShowcase>

const Template: ComponentStory<typeof HomeShowcase> = () => <HomeShowcase />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
