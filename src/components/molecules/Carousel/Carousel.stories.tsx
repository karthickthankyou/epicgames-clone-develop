import { ComponentStory, ComponentMeta } from '@storybook/react'
import Carousel from './Carousel'
import { sampleImages } from './data'

export default {
  title: 'molecules/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  images: sampleImages,
}

export const Hurry = Template.bind({})
Hurry.args = {
  images: sampleImages,
  duration: 1000,
}

export const Slow = Template.bind({})
Slow.args = {
  images: sampleImages,
  duration: 4000,
}

export const Scrollable = Template.bind({})
Scrollable.args = {
  images: [
    ...sampleImages,
    ...sampleImages,
    ...sampleImages,
    ...sampleImages,
    ...sampleImages,
  ],
  duration: 2000,
}
