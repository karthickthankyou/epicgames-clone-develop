import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({
  size,
  variant,
  fullWidth,
  children,
}) => (
  <Button size={size} variant={variant} fullWidth={fullWidth}>
    {children}
  </Button>
)

export const Primary = Template.bind({})
Primary.args = {
  size: 'md',
  variant: 'containedPrimary',
  fullWidth: false,
  children: 'Hello World',
}
Primary.parameters = {}
