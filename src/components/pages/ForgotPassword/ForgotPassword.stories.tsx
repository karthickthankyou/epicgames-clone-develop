import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter, Route } from 'react-router-dom'

import ForgotPassword from './ForgotPassword'

export default {
  title: 'templates/ForgotPassword',
  component: ForgotPassword,
} as ComponentMeta<typeof ForgotPassword>

const Template = ({ email }: { email: string }) => (
  <MemoryRouter initialEntries={[{ state: { email } }]}>
    <ForgotPassword />
  </MemoryRouter>
)
const NoEmailTemplate: ComponentStory<typeof ForgotPassword> = () => (
  <ForgotPassword />
)

export const NoEmail = NoEmailTemplate.bind({})
NoEmail.args = {}
export const WithEmail = Template.bind({})
WithEmail.args = {
  email: 'moonknight@marvel.com',
}
