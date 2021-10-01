import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import News from './News'

export default {
  title: 'components/pages/News',
  component: News,
} as ComponentMeta<typeof News>

const Template: ComponentStory<typeof News> = () => <News />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
