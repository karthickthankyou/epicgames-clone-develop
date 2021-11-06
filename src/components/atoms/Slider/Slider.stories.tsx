import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Slider from './Slider'

export default {
  title: 'atoms/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = ({
  defaultValue,
  min = 0,
  max = 100,
}) => {
  const [value, setValue] = useState<number[]>([min, max])
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }
  console.log('Slider value: ', value)

  return <Slider value={value} onChange={handleChange} min={min} max={max} />
}

export const Primary = Template.bind({})
Primary.args = {
  defaultValue: [122, 400],
  min: 0,
  max: 1000,
}
Primary.parameters = {}
