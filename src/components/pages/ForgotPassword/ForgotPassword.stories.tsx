import { ComponentStory, ComponentMeta } from '@storybook/react'
import ForgotPassword from './ForgotPassword'

export default {
  title: 'pages/ForgotPassword',
  component: ForgotPassword,
} as ComponentMeta<typeof ForgotPassword>

const Template: ComponentStory<typeof ForgotPassword> = () => <ForgotPassword />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
