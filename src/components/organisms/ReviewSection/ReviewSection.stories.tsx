import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { reviews } from '@utils/data'
import { getRandomNumber } from '@utils/index'
import ReviewSection from './ReviewSection'

export default {
  title: 'organisms/ReviewSection',
  component: ReviewSection,
} as ComponentMeta<typeof ReviewSection>

const Template: ComponentStory<typeof ReviewSection> = (args) => (
  <ReviewSection {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  averageRating: getRandomNumber(0, 100),
  count: getRandomNumber(3, 20000),
  reviews,
}
Primary.parameters = {}
