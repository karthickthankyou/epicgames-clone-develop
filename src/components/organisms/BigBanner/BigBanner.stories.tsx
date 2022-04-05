import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BigBanner from './BigBanner'

export default {
  title: 'organisms/BigBanner',
  component: BigBanner,
} as ComponentMeta<typeof BigBanner>

const Template: ComponentStory<typeof BigBanner> = () => (
  <BigBanner
    id='273'
    title='Rocket League'
    description='Rocket League is a high-powered hybrid of arcade-style soccer and
        vehicular mayhem with easy-to-understand controls and fluid,
        physics-driven competition.'
  />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
