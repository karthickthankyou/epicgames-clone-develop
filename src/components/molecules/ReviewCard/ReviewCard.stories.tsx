import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ReviewCard from './ReviewCard'

export default {
  title: 'components/molecules/ReviewCard',
  component: ReviewCard,
} as ComponentMeta<typeof ReviewCard>

const Template: ComponentStory<typeof ReviewCard> = ({ reviewScore }) => (
  <ReviewCard reviewScore={reviewScore} />
)

export const Primary = Template.bind({})
Primary.args = {
  reviewScore: 56,
}
Primary.parameters = {}
