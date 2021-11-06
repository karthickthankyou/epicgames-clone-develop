import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { setFilterRatingRange } from '../../../store/browseGames'
import RangeFilter from '.'

export default {
  title: 'atoms/RangeFilter',
  component: RangeFilter,
} as ComponentMeta<typeof RangeFilter>

const Template: ComponentStory<typeof RangeFilter> = ({
  name,
  min,
  max,
  action,
}) => <RangeFilter name={name} min={min} max={max} action={action} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'Hello',
  min: 0,
  max: 12,
}
Primary.parameters = {}