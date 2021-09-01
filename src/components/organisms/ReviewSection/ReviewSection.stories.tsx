import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ReviewSection from './ReviewSection'

export default {
  title: 'organisms/ReviewSection',
  component: ReviewSection,
} as ComponentMeta<typeof ReviewSection>

const Template: ComponentStory<typeof ReviewSection> = () => (
  <ReviewSection rating={100} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
