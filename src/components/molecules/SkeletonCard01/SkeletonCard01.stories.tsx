import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SkeletonCard01 from './SkeletonCard01'

export default {
  title: 'molecules/SkeletonCard01',
  component: SkeletonCard01,
} as ComponentMeta<typeof SkeletonCard01>

const Template: ComponentStory<typeof SkeletonCard01> = () => <SkeletonCard01 />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
