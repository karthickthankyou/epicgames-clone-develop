import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { getDates } from '@utils/index'
import ReviewCard from './ReviewCard'

export default {
  title: 'molecules/ReviewCard',
  component: ReviewCard,
} as ComponentMeta<typeof ReviewCard>

const Template: ComponentStory<typeof ReviewCard> = (args) => (
  <ReviewCard {...args} />
)

export const LowScore = Template.bind({})
LowScore.args = {
  reviewScore: 13,
  userName: 'Jon Dough',
  date: getDates().randomDate,
  review:
    'Most challenging game I have ever played. Took me 3 hours to get it to run.',
  approvalRate: 100,
}

export const VeryLowScore = Template.bind({})
VeryLowScore.args = {
  reviewScore: 1,
  userName: 'Jon Bo',
  date: getDates().randomDate,
  review:
    'I give this game first rank #1. Best game ever.🏆 🏆 🏆 😃 😃 😃 👍 ',
  approvalRate: 0,
}

export const HighScore = Template.bind({})
HighScore.args = {
  reviewScore: 97,
  userName: 'Jane Thor',
  date: getDates().randomDate,
  review:
    'Really enjoyed it to the core. I am typing this review from an internet cafe inside the game. I am a digital being now.',
  approvalRate: 25,
}
HighScore.parameters = {}

export const Primary = Template.bind({})
Primary.args = {
  reviewScore: 50,
  userName: 'Mediocre Madeline',
  date: getDates().randomDate,
  review: 'Meh.',
  approvalRate: 65,
}
Primary.parameters = {}
