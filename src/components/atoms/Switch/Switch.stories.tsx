import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Switch from './Switch'

export default {
  title: 'atoms/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = ({
  defaultChecked,
  disabled,
  readOnly,
  required,
}) => {
  const [isChecked, setIsChecked] = React.useState(true)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }
  return (
    <Switch
      checked={isChecked}
      onChange={handleChange}
      defaultChecked={defaultChecked}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
    />
  )
}

export const Primary = Template.bind({})
Primary.args = {
  defaultChecked: false,
  disabled: false,

  readOnly: false,
  required: false,
}
Primary.parameters = {}
