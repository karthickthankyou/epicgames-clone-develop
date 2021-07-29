import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BigBanner from './BigBanner'

export default {
  title: 'organisms/BigBanner',
  component: BigBanner,
} as ComponentMeta<typeof BigBanner>

const Template: ComponentStory<typeof BigBanner> = () => <BigBanner />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
