import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserPage from './UserPage'

export default {
  title: 'pages/UserPage',
  component: UserPage,
} as ComponentMeta<typeof UserPage>

const Template: ComponentStory<typeof UserPage> = (args) => <UserPage />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
