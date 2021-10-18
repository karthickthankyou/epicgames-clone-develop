import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AccordionHeader from './AccordionHeader'

export default {
  title: 'atoms/AccordionHeader',
  component: AccordionHeader,
} as ComponentMeta<typeof AccordionHeader>

const Template: ComponentStory<typeof AccordionHeader> = ({
  name,
  open,
  setOpen,
}) => <AccordionHeader name={name} open={open} setOpen={setOpen} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'Hello',
  open: false,
  setOpen: () => {},
}
Primary.parameters = {}
