import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ReviewSection from './ReviewSection'

export default {
  title: 'components/organisms/ReviewSection',
  component: ReviewSection,
} as ComponentMeta<typeof ReviewSection>

const Template: ComponentStory<typeof ReviewSection> = (args) => (
  <ReviewSection />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
