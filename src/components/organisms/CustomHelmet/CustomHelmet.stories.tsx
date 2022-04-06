import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CustomHelmet from './CustomHelmet'

export default {
  title: 'organisms/CustomHelmet',
  component: CustomHelmet,
} as ComponentMeta<typeof CustomHelmet>

const Template: ComponentStory<typeof CustomHelmet> = (args) => (
  <>
    <CustomHelmet {...args} />
    <div className='italic text-gray-400'>
      Modify the title and description and see the title on the new tab.
    </div>
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Custom helmet title',
  description: 'Custom helmet description',
}
Primary.parameters = {}
