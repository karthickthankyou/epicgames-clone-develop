import { ComponentStory, ComponentMeta } from '@storybook/react'
import Carousel from './Carousel'

export default {
  title: 'molecules/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = () => <Carousel />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
